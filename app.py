from flask import Flask, request, jsonify, render_template
import sqlite3
import json
from datetime import datetime

app = Flask(__name__)
DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Tabla Finanzas Mensuales (Ingresos y Gastos)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS finances (
            month_year TEXT PRIMARY KEY,
            data TEXT NOT NULL
        )
    ''')
    
    # Tabla Metas de Ahorro (Persistentes, no mensuales)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS goals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            target_amount REAL NOT NULL,
            current_amount REAL DEFAULT 0,
            status TEXT DEFAULT 'active', -- active, completed, archived
            history TEXT DEFAULT '[]' -- JSON array de logs
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS app_state (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            data TEXT NOT NULL
        )
    ''')
    
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('index.html')

# --- RUTAS DE FINANZAS MENSUALES ---

@app.route('/api/finances/<month_year>', methods=['GET'])
def get_finances(month_year):
    conn = get_db_connection()
    row = conn.execute('SELECT data FROM finances WHERE month_year = ?', (month_year,)).fetchone()
    conn.close()
    
    default_data = {
        'income': 0,
        'fixed_expenses': [],
        'variable_expenses': [],
        'savings_percentage': 10,
        'distributed_savings': 0 # Cuánto del ahorro teórico ya se asignó a metas
    }
    
    if row:
        return jsonify(json.loads(row['data']))
    return jsonify(default_data)

@app.route('/api/finances/<month_year>', methods=['POST'])
def save_finances(month_year):
    data = request.get_json()
    conn = get_db_connection()
    try:
        conn.execute('INSERT OR REPLACE INTO finances (month_year, data) VALUES (?, ?)', 
                     (month_year, json.dumps(data)))
        conn.commit()
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

@app.route('/api/months', methods=['GET'])
def get_months():
    conn = get_db_connection()
    rows = conn.execute('SELECT month_year FROM finances ORDER BY month_year DESC').fetchall()
    conn.close()
    return jsonify([row['month_year'] for row in rows])

# --- RUTAS DE METAS (GOALS) ---

@app.route('/api/goals', methods=['GET'])
def get_goals():
    conn = get_db_connection()
    # Traemos activas y completadas (no archivadas)
    rows = conn.execute("SELECT * FROM goals WHERE status != 'archived'").fetchall()
    goals = []
    for row in rows:
        goal = dict(row)
        goal['history'] = json.loads(goal['history'])
        goals.append(goal)
    conn.close()
    return jsonify(goals)

@app.route('/api/goals', methods=['POST'])
def create_goal():
    data = request.get_json()
    conn = get_db_connection()
    conn.execute('INSERT INTO goals (name, target_amount, current_amount, status, history) VALUES (?, ?, ?, ?, ?)',
                 (data['name'], data['target'], 0, 'active', json.dumps([])))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

@app.route('/api/goals/<int:goal_id>/update', methods=['POST'])
def update_goal(goal_id):
    """Maneja depósitos, retiros y cambios de estado"""
    data = request.get_json()
    # data espera: { amount_change: float, history_entry: dict, new_status: str (opcional) }
    
    conn = get_db_connection()
    goal = conn.execute('SELECT * FROM goals WHERE id = ?', (goal_id,)).fetchone()
    
    if not goal:
        return jsonify({'error': 'Meta no encontrada'}), 404
        
    current_history = json.loads(goal['history'])
    
    # Actualizar historial
    if 'history_entry' in data:
        current_history.insert(0, data['history_entry']) # Agregar al inicio
        
    # Calcular nuevo monto
    new_amount = goal['current_amount'] + data.get('amount_change', 0)
    
    # Determinar estado
    status = data.get('new_status', goal['status'])
    if status == 'active' and new_amount >= goal['target_amount']:
        status = 'completed' # Auto-completar si llega al monto
        
    conn.execute('''
        UPDATE goals 
        SET current_amount = ?, status = ?, history = ?
        WHERE id = ?
    ''', (new_amount, status, json.dumps(current_history), goal_id))
    
    conn.commit()
    conn.close()
    return jsonify({'success': True})

# --- RUTA DE ESTADO COMPLETO ---

@app.route('/api/state', methods=['GET'])
def get_state():
    conn = get_db_connection()
    row = conn.execute('SELECT data FROM app_state WHERE id = 1').fetchone()
    conn.close()
    if row:
        return jsonify(json.loads(row['data']))
    return jsonify({})

@app.route('/api/state', methods=['POST'])
def save_state():
    data = request.get_json()
    conn = get_db_connection()
    conn.execute('INSERT OR REPLACE INTO app_state (id, data) VALUES (1, ?)',
                 (json.dumps(data),))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=10000)
