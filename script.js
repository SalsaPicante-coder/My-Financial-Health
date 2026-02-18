
(() => {
  const STORAGE_KEY = 'financialHealthState';

  const TRANSLATIONS = {
    'es-ES': {
      'brand.subtitle': 'Control diario, sin estrés',
      'nav.dashboard': 'Resumen',
      'nav.income': 'Ingresos',
      'nav.fixed': 'Gastos fijos',
      'nav.variable': 'Gastos variables',
      'nav.payments': 'Pagos',
      'nav.goals': 'Objetivos',
      'nav.history': 'Historial',
      'nav.settings': 'Ajustes',
      'period.label': 'Periodo',
      'period.current': 'Actual',
      'period.custom': 'Personalizado',
      'sidebar.available': 'Disponible',
      'sidebar.savings': 'Ahorro',
      'profile.name': 'Perfil local',
      'profile.type': 'Sincronización privada',
      'dashboard.title': 'Resumen',
      'dashboard.subtitle': 'Vista general de tu mes en tiempo real.',
      'actions.save': 'Guardar',
      'actions.refresh': 'Recargar',
      'actions.add': 'Agregar',
      'actions.confirm': 'Confirmar',
      'actions.cancel': 'Cancelar',
      'actions.closeMonth': 'Finalizar mes',
      'actions.confirmClose': 'Confirmar cierre',
      'actions.quickAdd': '+ Registro',
      'kpi.income': 'Ingresos',
      'kpi.expenses': 'Gastos totales',
      'kpi.variable': 'Gastos variables',
      'kpi.available': 'Dinero disponible',
      'kpi.savings': 'Ahorro total',
      'kpi.availableSub': 'Después de ahorrar',
      'kpi.savingsSub': 'Sugerido del mes',
      'kpi.startBalance': 'Saldo inicial',
      'charts.money': 'Distribución general del dinero',
      'charts.categories': 'Gastos por categoría',
      'charts.goals': 'Distribución del ahorro',
      'charts.expenses': 'Gastos',
      'charts.savings': 'Ahorro',
      'charts.available': 'Disponible',
      'charts.income': 'Ingresos',
      'charts.typeDoughnut': 'Dona',
      'charts.typeBar': 'Barras',
      'charts.typeLine': 'Línea',
      'charts.paletteDefault': 'Default',
      'charts.paletteVibrant': 'Vibrante',
      'charts.paletteSoft': 'Suave',
      'charts.compare': 'Comparar meses',
      'dashboard.insights': 'Insights del mes',
      'dashboard.notes': 'Notas rápidas',
      'income.title': 'Ingresos',
      'income.subtitle': 'Registra ingresos recurrentes o únicos.',
      'income.add': 'Agregar ingreso',
      'income.source': 'Fuente',
      'income.amount': 'Monto',
      'income.date': 'Fecha',
      'income.savingsPercent': 'Porcentaje de ahorro',
      'income.savingsSuggested': 'Ahorro sugerido',
      'income.list': 'Ingresos registrados',
      'fixed.title': 'Gastos fijos',
      'fixed.subtitle': 'Compromisos mensuales que se repiten.',
      'fixed.add': 'Agregar gasto fijo',
      'fixed.list': 'Gastos fijos registrados',
      'variable.title': 'Gastos variables',
      'variable.subtitle': 'Compras, ocio y gastos flexibles.',
      'variable.add': 'Agregar gasto variable',
      'variable.list': 'Gastos variables registrados',
      'expense.name': 'Nombre',
      'expense.amount': 'Monto',
      'expense.category': 'Categoría',
      'expense.date': 'Fecha',
      'goals.title': 'Objetivos de ahorro',
      'goals.subtitle': 'Distribuye tu ahorro mensual y controla el progreso.',
      'goals.summary': 'Resumen del ahorro',
      'goals.suggested': 'Ahorro sugerido',
      'goals.distributed': 'Ahorro distribuido',
      'goals.available': 'Ahorro disponible',
      'goals.distribute': 'Distribuir ahorro del mes',
      'goals.modeAmount': 'Por monto',
      'goals.modePercent': 'Por porcentaje',
      'goals.apply': 'Aplicar distribución',
      'goals.add': 'Nueva meta',
      'goals.name': 'Nombre del objetivo',
      'goals.category': 'Categoría',
      'goals.target': 'Monto objetivo',
      'goals.showArchived': 'Mostrar archivadas',
      'goals.useAll': 'Usar el ahorro (objetivo cumplido)',
      'goals.usePartial': 'Usé parte del ahorro',
      'goals.notUsed': 'No lo usé todavía',
      'goals.adjustAmount': 'Monto',
      'goals.adjustReason': 'Motivo',
      'goals.extra': 'Ahorro extra',
      'goals.extraHint': 'Fondos liberados de metas eliminadas. Decide cómo redistribuirlos.',
      'goals.extraAmount': 'Monto',
      'goals.extraAction': 'Acción',
      'goals.extraDistribute': 'Distribuir a metas',
      'goals.extraAvailable': 'Mover a disponible',
      'goals.extraApply': 'Aplicar',
      'goals.deleteTitle': 'Eliminar meta',
      'goals.deleteConfirm': 'Eliminar',
      'goals.break': 'Romper meta',
      'goals.delete': 'Eliminar',
      'goals.completed': 'Meta cumplida',
      'goals.deleteSuccess': 'Meta eliminada',
      'goals.breakQuestion': '¿Usaste parte de este ahorro?',
      'goals.breakYes': 'Sí, usé parte',
      'goals.breakNo': 'No, aún no',
      'history.title': 'Historial',
      'history.subtitle': 'Movimientos registrados por mes y objetivo.',
      'history.filters': 'Filtros',
      'history.search': 'Buscar',
      'history.type': 'Tipo',
      'history.all': 'Todos',
      'history.income': 'Ingresos',
      'history.expense': 'Gastos',
      'history.goal': 'Metas',
      'history.savings': 'Ahorro',
      'history.payment': 'Pagos',
      'history.month': 'Cierre de mes',
      'history.category': 'Categoría',
      'history.list': 'Actividad reciente',
      'history.general': 'General',
      'payments.title': 'Pagos',
      'payments.subtitle': 'Control de deudas, servicios y parcelas en calendario mensual.',
      'payments.add': 'Crear pago',
      'payments.name': 'Título',
      'payments.entity': 'Persona / entidad',
      'payments.type': 'Tipo',
      'payments.typeDebt': 'Deuda',
      'payments.typeInstallment': 'Parcela',
      'payments.typeService': 'Servicio',
      'payments.typeLoan': 'Préstamo',
      'payments.typeCustom': 'Personalizado',
      'payments.description': 'Descripción',
      'payments.amount': 'Monto',
      'payments.paidAmount': 'Monto pagado',
      'payments.date': 'Fecha',
      'payments.installments': 'Parcelas',
      'payments.autoInstallments': 'Continuar parcelas',
      'payments.calendar': 'Calendario mensual',
      'payments.legendNone': 'Sin pagos',
      'payments.legendPending': 'Pendientes',
      'payments.legendPartial': 'Parciales',
      'payments.legendPaid': 'Pagados',
      'payments.dayTitle': 'Pagos del día',
      'payments.status': 'Estado',
      'payments.statusPending': 'Pendiente',
      'payments.statusPartial': 'Parcial',
      'payments.statusPaid': 'Pagado',
      'payments.statusOverdue': 'Vencido',
      'payments.markPaid': 'Marcar pagado',
      'payments.edit': 'Editar',
      'payments.delete': 'Eliminar',
      'payments.installmentPrefix': 'Parcela',
      'payments.editTitle': 'Editar pago',
      'close.title': 'Finalizar mes',
      'close.pendingTitle': 'Pagos pendientes',
      'close.movePending': 'Mover al próximo mes',
      'close.markOverdue': 'Marcar como vencidos',
      'close.success': 'Mes cerrado correctamente',
      'close.closedTitle': 'Mes cerrado',
      'close.closedSubtitle': 'Este periodo es solo lectura.',
      'settings.title': 'Ajustes',
      'settings.subtitle': 'Personaliza tu experiencia.',
      'settings.preferences': 'Preferencias',
      'settings.currency': 'Moneda',
      'settings.language': 'Idioma',
      'settings.theme': 'Tema',
      'settings.themeLight': 'Claro',
      'settings.themeDark': 'Oscuro',
      'settings.themeMidnight': 'Extra oscuro',
      'settings.startDay': 'Inicio de mes',
      'period.current': 'ACTUAL',
      'period.closed': 'CERRADO',
      'period.custom': 'Personalizado',
      'settings.server': 'Usar servidor local (Flask)',
      'settings.data': 'Datos',
      'settings.export': 'Exportar JSON',
      'settings.import': 'Importar JSON',
      'settings.clear': 'Borrar todos los datos',
      'settings.clearConfirm': '¿Seguro que deseas borrar todos los datos?',
      'msg.dataReloaded': 'Datos recargados',
      'msg.serverNotFound': 'No se encontró servidor local',
      'msg.incomeAdded': 'Ingreso agregado',
      'msg.fixedAdded': 'Gasto fijo agregado',
      'msg.variableAdded': 'Gasto variable agregado',
      'msg.goalAdded': 'Meta agregada',
      'msg.amountExceeds': 'El monto supera el ahorro disponible',
      'msg.amountInvalid': 'Ingresa un monto válido',
      'msg.extraExceeds': 'El monto supera el ahorro extra disponible',
      'msg.extraApplied': 'Ahorro extra aplicado a disponible',
      'msg.noSavingsAvailable': 'No hay ahorro disponible para distribuir',
      'msg.enterAmountOrPercent': 'Ingresa un monto o porcentaje',
      'msg.percentTooHigh': 'El porcentaje total supera 100%',
      'msg.amountTooHigh': 'El monto supera el ahorro disponible',
      'msg.distributionApplied': 'Distribución aplicada',
      'msg.extraDistributed': 'Ahorro extra distribuido',
      'msg.goalUpdated': 'Meta actualizada',
      'msg.goalUsed': 'Usaste {amount} de tu objetivo \"{goal}\".',
      'msg.goalRemaining': 'Aún te faltan {amount} para completarlo.',
      'msg.goalNoteLogged': 'Registramos tu nota sobre \"{goal}\".',
      'msg.goalCompletedUsed': 'Usaste {amount} de {goal}.',
      'msg.goalCompletedAvailable': '{goal} completado, ahorro disponible',
      'msg.paymentAdded': 'Pago agregado',
      'msg.paymentPaid': 'Pago marcado como pagado',
      'msg.paymentDeleted': 'Pago eliminado',
      'msg.paymentUpdated': 'Pago actualizado',
      'msg.dataExported': 'Datos exportados',
      'msg.dataImported': 'Datos importados',
      'msg.fileInvalid': 'Archivo inválido',
      'msg.dataCleared': 'Datos eliminados',
      'search.placeholder': 'Buscar movimientos, metas o categorías',
      'notes.placeholder': 'Escribe recordatorios financieros para este periodo...',
      'income.placeholder': 'Salario, freelance...',
      'income.empty': 'Sin ingresos registrados',
      'fixed.placeholder': 'Renta, internet...',
      'fixed.empty': 'Sin gastos fijos registrados',
      'variable.placeholder': 'Supermercado, café...',
      'variable.empty': 'Sin gastos variables registrados',
      'payments.titlePlaceholder': 'Renta, préstamo...',
      'payments.entityPlaceholder': 'Banco, amigo, empresa',
      'payments.descriptionPlaceholder': 'Detalle corto',
      'payments.dayCount': '{count} pagos',
      'payments.empty': 'Sin pagos',
      'goals.placeholder': 'Viaje, emergencia...',
      'goals.reasonPlaceholder': 'Motivo corto',
      'goals.historyTitle': 'Historial',
      'goals.historyEmpty': 'Sin movimientos',
      'goals.archived': 'Archivado',
      'goals.empty': 'Sin metas activas',
      'goals.helpPercent': 'Ingresa porcentajes del ahorro disponible.',
      'goals.helpAmount': 'Ingresa montos del ahorro disponible.',
      'goals.completionTitle': 'Meta completada: {goal}',
      'goals.completionDetail': 'Tienes {amount} disponibles.',
      'goals.adjustDeposit': 'Aportar a {goal}',
      'goals.adjustWithdraw': 'Retirar de {goal}',
      'goals.adjustPartial': 'Usé parte del ahorro de {goal}',
      'goals.deleteDetail': '{goal} tiene {amount}. Ese monto irá a {extra}.',
      'goals.deleteDetailEmpty': '{goal} se eliminará definitivamente.',
      'goals.historyUsed': 'Objetivo cumplido y utilizado',
      'goals.historyAvailable': 'Meta completada, ahorro disponible',
      'goals.historyExtra': 'Distribución de ahorro extra',
      'goals.historyDistribution': 'Distribución de ahorro ({period})',
      'history.searchPlaceholder': 'Nombre, motivo...',
      'history.empty': 'Sin movimientos',
      'distribution.empty': 'Crea una meta para distribuir tu ahorro.',
      'insights.distributed': 'Has distribuido {percent}% de tu ahorro mensual.',
      'insights.topCategory': 'La categoría más alta es {category} ({amount}).',
      'insights.noCategory': 'Aún no registras gastos por categoría.',
      'insights.available': 'Tu disponible actual es {amount}.',
      'kpi.entries': '{count} entradas',
      'kpi.movements': '{count} movimientos',
      'kpi.categoriesCount': '{count} categorías',
      'server.connected': 'Servidor conectado',
      'server.disconnected': 'Servidor desconectado',
      'close.summary': '{period}: {available} {label} ({startLabel} + {startAmount}).',
      'close.pendingCount': '{count} pendientes',
      'category.uncategorized': 'Sin categoría',
      'history.titleIncome': 'Ingreso: {name}',
      'history.titleFixed': 'Gasto fijo: {name}',
      'history.titleVariable': 'Gasto variable: {name}',
      'history.titleGoalNew': 'Nueva meta: {name}',
      'history.titleGoalAdjusted': 'Meta ajustada: {name}',
      'history.titleGoalDeposit': 'Aporte en {name}',
      'history.titleGoalWithdraw': 'Retiro en {name}',
      'history.titleGoalCompleted': 'Meta completada: {name}',
      'history.titleGoalAchieved': 'Objetivo cumplido: {name}',
      'history.titleGoalDeleted': 'Meta eliminada: {name}',
      'history.titleSavingsContribution': 'Aporte a {goal}',
      'history.titleExtraSavings': 'Ahorro extra movido a disponible',
      'history.titlePayment': 'Pago: {title}',
      'history.titlePaymentPaid': 'Pago marcado como pagado: {title}',
      'history.titleMonthClose': 'Finalizar mes {period}'
    },
    'en-US': {
      'brand.subtitle': 'Daily control, zero stress',
      'nav.dashboard': 'Overview',
      'nav.income': 'Income',
      'nav.fixed': 'Fixed expenses',
      'nav.variable': 'Variable expenses',
      'nav.payments': 'Payments',
      'nav.goals': 'Goals',
      'nav.history': 'History',
      'nav.settings': 'Settings',
      'period.label': 'Period',
      'period.current': 'Current',
      'period.custom': 'Custom',
      'sidebar.available': 'Available',
      'sidebar.savings': 'Savings',
      'profile.name': 'Local profile',
      'profile.type': 'Private sync',
      'dashboard.title': 'Overview',
      'dashboard.subtitle': 'Real-time view of your month.',
      'actions.save': 'Save',
      'actions.refresh': 'Refresh',
      'actions.add': 'Add',
      'actions.confirm': 'Confirm',
      'actions.cancel': 'Cancel',
      'actions.closeMonth': 'Close month',
      'actions.confirmClose': 'Confirm close',
      'actions.quickAdd': '+ Entry',
      'kpi.income': 'Income',
      'kpi.expenses': 'Total expenses',
      'kpi.variable': 'Variable expenses',
      'kpi.available': 'Available cash',
      'kpi.savings': 'Total savings',
      'kpi.availableSub': 'After saving',
      'kpi.savingsSub': 'Suggested this month',
      'kpi.startBalance': 'Opening balance',
      'charts.money': 'Overall money distribution',
      'charts.categories': 'Expenses by category',
      'charts.goals': 'Savings distribution',
      'charts.expenses': 'Expenses',
      'charts.savings': 'Savings',
      'charts.available': 'Available',
      'charts.income': 'Income',
      'charts.typeDoughnut': 'Doughnut',
      'charts.typeBar': 'Bars',
      'charts.typeLine': 'Line',
      'charts.paletteDefault': 'Default',
      'charts.paletteVibrant': 'Vibrant',
      'charts.paletteSoft': 'Soft',
      'charts.compare': 'Compare months',
      'dashboard.insights': 'Monthly insights',
      'dashboard.notes': 'Quick notes',
      'income.title': 'Income',
      'income.subtitle': 'Track recurring or one-time income.',
      'income.add': 'Add income',
      'income.source': 'Source',
      'income.amount': 'Amount',
      'income.date': 'Date',
      'income.savingsPercent': 'Savings percentage',
      'income.savingsSuggested': 'Suggested savings',
      'income.list': 'Logged income',
      'fixed.title': 'Fixed expenses',
      'fixed.subtitle': 'Monthly commitments that repeat.',
      'fixed.add': 'Add fixed expense',
      'fixed.list': 'Logged fixed expenses',
      'variable.title': 'Variable expenses',
      'variable.subtitle': 'Shopping, leisure and flexible costs.',
      'variable.add': 'Add variable expense',
      'variable.list': 'Logged variable expenses',
      'expense.name': 'Name',
      'expense.amount': 'Amount',
      'expense.category': 'Category',
      'expense.date': 'Date',
      'goals.title': 'Savings goals',
      'goals.subtitle': 'Distribute monthly savings and track progress.',
      'goals.summary': 'Savings summary',
      'goals.suggested': 'Suggested savings',
      'goals.distributed': 'Distributed savings',
      'goals.available': 'Available savings',
      'goals.distribute': 'Distribute monthly savings',
      'goals.modeAmount': 'By amount',
      'goals.modePercent': 'By percentage',
      'goals.apply': 'Apply distribution',
      'goals.add': 'New goal',
      'goals.name': 'Goal name',
      'goals.category': 'Category',
      'goals.target': 'Target amount',
      'goals.showArchived': 'Show archived',
      'goals.useAll': 'Use savings (goal achieved)',
      'goals.usePartial': 'Used part of savings',
      'goals.notUsed': 'Not used yet',
      'goals.adjustAmount': 'Amount',
      'goals.adjustReason': 'Reason',
      'goals.extra': 'Extra savings',
      'goals.extraHint': 'Funds released from deleted goals. Decide how to redistribute them.',
      'goals.extraAmount': 'Amount',
      'goals.extraAction': 'Action',
      'goals.extraDistribute': 'Distribute to goals',
      'goals.extraAvailable': 'Move to available',
      'goals.extraApply': 'Apply',
      'goals.deleteTitle': 'Delete goal',
      'goals.deleteConfirm': 'Delete',
      'goals.break': 'Break goal',
      'goals.delete': 'Delete',
      'goals.completed': 'Goal completed',
      'goals.deleteSuccess': 'Goal deleted',
      'goals.breakQuestion': 'Did you use part of this savings?',
      'goals.breakYes': 'Yes, I used some',
      'goals.breakNo': 'No, not yet',
      'history.title': 'History',
      'history.subtitle': 'Activity logged by month and goal.',
      'history.filters': 'Filters',
      'history.search': 'Search',
      'history.type': 'Type',
      'history.all': 'All',
      'history.income': 'Income',
      'history.expense': 'Expenses',
      'history.goal': 'Goals',
      'history.savings': 'Savings',
      'history.payment': 'Payments',
      'history.month': 'Month close',
      'history.category': 'Category',
      'history.list': 'Recent activity',
      'history.general': 'General',
      'payments.title': 'Payments',
      'payments.subtitle': 'Track debts, services and installments in a monthly calendar.',
      'payments.add': 'Create payment',
      'payments.name': 'Title',
      'payments.entity': 'Person / entity',
      'payments.type': 'Type',
      'payments.typeDebt': 'Debt',
      'payments.typeInstallment': 'Installment',
      'payments.typeService': 'Service',
      'payments.typeLoan': 'Loan',
      'payments.typeCustom': 'Custom',
      'payments.description': 'Description',
      'payments.amount': 'Amount',
      'payments.paidAmount': 'Paid amount',
      'payments.date': 'Date',
      'payments.installments': 'Installments',
      'payments.autoInstallments': 'Continue installments',
      'payments.calendar': 'Monthly calendar',
      'payments.legendNone': 'No payments',
      'payments.legendPending': 'Pending',
      'payments.legendPartial': 'Partial',
      'payments.legendPaid': 'Paid',
      'payments.dayTitle': 'Payments for the day',
      'payments.status': 'Status',
      'payments.statusPending': 'Pending',
      'payments.statusPartial': 'Partial',
      'payments.statusPaid': 'Paid',
      'payments.statusOverdue': 'Overdue',
      'payments.markPaid': 'Mark paid',
      'payments.edit': 'Edit',
      'payments.delete': 'Delete',
      'payments.installmentPrefix': 'Installment',
      'payments.editTitle': 'Edit payment',
      'close.title': 'Close month',
      'close.pendingTitle': 'Pending payments',
      'close.movePending': 'Move to next month',
      'close.markOverdue': 'Mark as overdue',
      'close.success': 'Month closed successfully',
      'close.closedTitle': 'Closed month',
      'close.closedSubtitle': 'This period is read-only.',
      'settings.title': 'Settings',
      'settings.subtitle': 'Personalize your experience.',
      'settings.preferences': 'Preferences',
      'settings.currency': 'Currency',
      'settings.language': 'Language',
      'settings.theme': 'Theme',
      'settings.themeLight': 'Light',
      'settings.themeDark': 'Dark',
      'settings.themeMidnight': 'Extra dark',
      'settings.startDay': 'Month start',
      'period.current': 'CURRENT',
      'period.closed': 'CLOSED',
      'period.custom': 'Custom',
      'settings.server': 'Use local server (Flask)',
      'settings.data': 'Data',
      'settings.export': 'Export JSON',
      'settings.import': 'Import JSON',
      'settings.clear': 'Clear all data',
      'settings.clearConfirm': 'Are you sure you want to clear all data?',
      'msg.dataReloaded': 'Data reloaded',
      'msg.serverNotFound': 'Local server not found',
      'msg.incomeAdded': 'Income added',
      'msg.fixedAdded': 'Fixed expense added',
      'msg.variableAdded': 'Variable expense added',
      'msg.goalAdded': 'Goal added',
      'msg.amountExceeds': 'Amount exceeds available savings',
      'msg.amountInvalid': 'Enter a valid amount',
      'msg.extraExceeds': 'Amount exceeds extra savings',
      'msg.extraApplied': 'Extra savings moved to available',
      'msg.noSavingsAvailable': 'No savings available to distribute',
      'msg.enterAmountOrPercent': 'Enter an amount or percentage',
      'msg.percentTooHigh': 'Total percentage exceeds 100%',
      'msg.amountTooHigh': 'Amount exceeds available savings',
      'msg.distributionApplied': 'Distribution applied',
      'msg.extraDistributed': 'Extra savings distributed',
      'msg.goalUpdated': 'Goal updated',
      'msg.goalUsed': 'You used {amount} from \"{goal}\".',
      'msg.goalRemaining': '{amount} left to complete it.',
      'msg.goalNoteLogged': 'We saved your note about \"{goal}\".',
      'msg.goalCompletedUsed': 'You used {amount} from {goal}.',
      'msg.goalCompletedAvailable': '{goal} completed, savings available',
      'msg.paymentAdded': 'Payment added',
      'msg.paymentPaid': 'Payment marked as paid',
      'msg.paymentDeleted': 'Payment deleted',
      'msg.paymentUpdated': 'Payment updated',
      'msg.dataExported': 'Data exported',
      'msg.dataImported': 'Data imported',
      'msg.fileInvalid': 'Invalid file',
      'msg.dataCleared': 'Data cleared',
      'search.placeholder': 'Search movements, goals or categories',
      'notes.placeholder': 'Write financial reminders for this period...',
      'income.placeholder': 'Salary, freelance...',
      'income.empty': 'No income recorded',
      'fixed.placeholder': 'Rent, internet...',
      'fixed.empty': 'No fixed expenses recorded',
      'variable.placeholder': 'Groceries, coffee...',
      'variable.empty': 'No variable expenses recorded',
      'payments.titlePlaceholder': 'Rent, loan...',
      'payments.entityPlaceholder': 'Bank, friend, company',
      'payments.descriptionPlaceholder': 'Short detail',
      'payments.dayCount': '{count} payments',
      'payments.empty': 'No payments',
      'goals.placeholder': 'Travel, emergency...',
      'goals.reasonPlaceholder': 'Short reason',
      'goals.historyTitle': 'History',
      'goals.historyEmpty': 'No activity',
      'goals.archived': 'Archived',
      'goals.empty': 'No active goals',
      'goals.helpPercent': 'Enter percentages of available savings.',
      'goals.helpAmount': 'Enter amounts from available savings.',
      'goals.completionTitle': 'Goal completed: {goal}',
      'goals.completionDetail': 'You have {amount} available.',
      'goals.adjustDeposit': 'Add to {goal}',
      'goals.adjustWithdraw': 'Withdraw from {goal}',
      'goals.adjustPartial': 'Used part of savings for {goal}',
      'goals.deleteDetail': '{goal} has {amount}. This amount will move to {extra}.',
      'goals.deleteDetailEmpty': '{goal} will be permanently deleted.',
      'goals.historyUsed': 'Goal achieved and used',
      'goals.historyAvailable': 'Goal completed, savings available',
      'goals.historyExtra': 'Extra savings distribution',
      'goals.historyDistribution': 'Savings distribution ({period})',
      'history.searchPlaceholder': 'Name, reason...',
      'history.empty': 'No activity',
      'distribution.empty': 'Create a goal to distribute your savings.',
      'insights.distributed': 'You have distributed {percent}% of your monthly savings.',
      'insights.topCategory': 'Top category is {category} ({amount}).',
      'insights.noCategory': 'No expenses recorded by category yet.',
      'insights.available': 'Your available balance is {amount}.',
      'kpi.entries': '{count} entries',
      'kpi.movements': '{count} movements',
      'kpi.categoriesCount': '{count} categories',
      'server.connected': 'Server connected',
      'server.disconnected': 'Server disconnected',
      'close.summary': '{period}: {available} {label} ({startLabel} + {startAmount}).',
      'close.pendingCount': '{count} pending',
      'category.uncategorized': 'Uncategorized',
      'history.titleIncome': 'Income: {name}',
      'history.titleFixed': 'Fixed expense: {name}',
      'history.titleVariable': 'Variable expense: {name}',
      'history.titleGoalNew': 'New goal: {name}',
      'history.titleGoalAdjusted': 'Goal adjusted: {name}',
      'history.titleGoalDeposit': 'Contribution to {name}',
      'history.titleGoalWithdraw': 'Withdrawal from {name}',
      'history.titleGoalCompleted': 'Goal completed: {name}',
      'history.titleGoalAchieved': 'Goal achieved: {name}',
      'history.titleGoalDeleted': 'Goal deleted: {name}',
      'history.titleSavingsContribution': 'Contribution to {goal}',
      'history.titleExtraSavings': 'Extra savings moved to available',
      'history.titlePayment': 'Payment: {title}',
      'history.titlePaymentPaid': 'Payment marked as paid: {title}',
      'history.titleMonthClose': 'Close month {period}'
    },
    'pt-BR': {
      'brand.subtitle': 'Controle diário, sem estresse',
      'nav.dashboard': 'Resumo',
      'nav.income': 'Receitas',
      'nav.fixed': 'Despesas fixas',
      'nav.variable': 'Despesas variáveis',
      'nav.payments': 'Pagamentos',
      'nav.goals': 'Metas',
      'nav.history': 'Histórico',
      'nav.settings': 'Ajustes',
      'period.label': 'Período',
      'period.current': 'Atual',
      'period.custom': 'Personalizado',
      'sidebar.available': 'Disponível',
      'sidebar.savings': 'Poupança',
      'profile.name': 'Perfil local',
      'profile.type': 'Sincronização privada',
      'dashboard.title': 'Resumo',
      'dashboard.subtitle': 'Visão em tempo real do mês.',
      'actions.save': 'Salvar',
      'actions.refresh': 'Atualizar',
      'actions.add': 'Adicionar',
      'actions.confirm': 'Confirmar',
      'actions.cancel': 'Cancelar',
      'actions.closeMonth': 'Fechar mês',
      'actions.confirmClose': 'Confirmar fechamento',
      'actions.quickAdd': '+ Registro',
      'kpi.income': 'Receitas',
      'kpi.expenses': 'Despesas totais',
      'kpi.variable': 'Despesas variáveis',
      'kpi.available': 'Disponível',
      'kpi.savings': 'Poupança total',
      'kpi.availableSub': 'Depois de poupar',
      'kpi.savingsSub': 'Sugerido do mês',
      'kpi.startBalance': 'Saldo inicial',
      'charts.money': 'Distribuição do dinheiro',
      'charts.categories': 'Despesas por categoria',
      'charts.goals': 'Distribuição da poupança',
      'charts.expenses': 'Despesas',
      'charts.savings': 'Poupança',
      'charts.available': 'Disponível',
      'charts.income': 'Receitas',
      'charts.typeDoughnut': 'Rosca',
      'charts.typeBar': 'Barras',
      'charts.typeLine': 'Linha',
      'charts.paletteDefault': 'Default',
      'charts.paletteVibrant': 'Vibrante',
      'charts.paletteSoft': 'Suave',
      'charts.compare': 'Comparar meses',
      'dashboard.insights': 'Insights do mês',
      'dashboard.notes': 'Notas rápidas',
      'income.title': 'Receitas',
      'income.subtitle': 'Registre receitas recorrentes ou únicas.',
      'income.add': 'Adicionar receita',
      'income.source': 'Fonte',
      'income.amount': 'Valor',
      'income.date': 'Data',
      'income.savingsPercent': 'Percentual de poupança',
      'income.savingsSuggested': 'Poupança sugerida',
      'income.list': 'Receitas registradas',
      'fixed.title': 'Despesas fixas',
      'fixed.subtitle': 'Compromissos mensais recorrentes.',
      'fixed.add': 'Adicionar despesa fixa',
      'fixed.list': 'Despesas fixas registradas',
      'variable.title': 'Despesas variáveis',
      'variable.subtitle': 'Compras, lazer e gastos flexíveis.',
      'variable.add': 'Adicionar despesa variável',
      'variable.list': 'Despesas variáveis registradas',
      'expense.name': 'Nome',
      'expense.amount': 'Valor',
      'expense.category': 'Categoria',
      'expense.date': 'Data',
      'goals.title': 'Metas de poupança',
      'goals.subtitle': 'Distribua a poupança mensal e acompanhe o progresso.',
      'goals.summary': 'Resumo da poupança',
      'goals.suggested': 'Poupança sugerida',
      'goals.distributed': 'Poupança distribuída',
      'goals.available': 'Poupança disponível',
      'goals.distribute': 'Distribuir poupança do mês',
      'goals.modeAmount': 'Por valor',
      'goals.modePercent': 'Por porcentagem',
      'goals.apply': 'Aplicar distribuição',
      'goals.add': 'Nova meta',
      'goals.name': 'Nome da meta',
      'goals.category': 'Categoria',
      'goals.target': 'Valor alvo',
      'goals.showArchived': 'Mostrar arquivadas',
      'goals.useAll': 'Usar a poupança (meta concluída)',
      'goals.usePartial': 'Usei parte da poupança',
      'goals.notUsed': 'Ainda não usei',
      'goals.adjustAmount': 'Valor',
      'goals.adjustReason': 'Motivo',
      'goals.extra': 'Poupança extra',
      'goals.extraHint': 'Fundos liberados de metas excluídas. Decida como redistribuir.',
      'goals.extraAmount': 'Valor',
      'goals.extraAction': 'Ação',
      'goals.extraDistribute': 'Distribuir para metas',
      'goals.extraAvailable': 'Mover para disponível',
      'goals.extraApply': 'Aplicar',
      'goals.deleteTitle': 'Excluir meta',
      'goals.deleteConfirm': 'Excluir',
      'goals.break': 'Quebrar meta',
      'goals.delete': 'Excluir',
      'goals.completed': 'Meta concluída',
      'goals.deleteSuccess': 'Meta excluída',
      'goals.breakQuestion': 'Você usou parte dessa poupança?',
      'goals.breakYes': 'Sim, usei parte',
      'goals.breakNo': 'Não, ainda não',
      'history.title': 'Histórico',
      'history.subtitle': 'Movimentos por mês e meta.',
      'history.filters': 'Filtros',
      'history.search': 'Buscar',
      'history.type': 'Tipo',
      'history.all': 'Todos',
      'history.income': 'Receitas',
      'history.expense': 'Despesas',
      'history.goal': 'Metas',
      'history.savings': 'Poupança',
      'history.payment': 'Pagamentos',
      'history.month': 'Fechamento do mês',
      'history.category': 'Categoria',
      'history.list': 'Atividade recente',
      'history.general': 'Geral',
      'payments.title': 'Pagamentos',
      'payments.subtitle': 'Controle dívidas, serviços e parcelas em um calendário mensal.',
      'payments.add': 'Criar pagamento',
      'payments.name': 'Título',
      'payments.entity': 'Pessoa / entidade',
      'payments.type': 'Tipo',
      'payments.typeDebt': 'Dívida',
      'payments.typeInstallment': 'Parcela',
      'payments.typeService': 'Serviço',
      'payments.typeLoan': 'Empréstimo',
      'payments.typeCustom': 'Personalizado',
      'payments.description': 'Descrição',
      'payments.amount': 'Valor',
      'payments.paidAmount': 'Valor pago',
      'payments.date': 'Data',
      'payments.installments': 'Parcelas',
      'payments.autoInstallments': 'Continuar parcelas',
      'payments.calendar': 'Calendário mensal',
      'payments.legendNone': 'Sem pagamentos',
      'payments.legendPending': 'Pendentes',
      'payments.legendPartial': 'Parciais',
      'payments.legendPaid': 'Pagos',
      'payments.dayTitle': 'Pagamentos do dia',
      'payments.status': 'Status',
      'payments.statusPending': 'Pendente',
      'payments.statusPartial': 'Parcial',
      'payments.statusPaid': 'Pago',
      'payments.statusOverdue': 'Vencido',
      'payments.markPaid': 'Marcar pago',
      'payments.edit': 'Editar',
      'payments.delete': 'Excluir',
      'payments.installmentPrefix': 'Parcela',
      'payments.editTitle': 'Editar pagamento',
      'close.title': 'Fechar mês',
      'close.pendingTitle': 'Pagamentos pendentes',
      'close.movePending': 'Mover para o próximo mês',
      'close.markOverdue': 'Marcar como vencidos',
      'close.success': 'Mês fechado com sucesso',
      'close.closedTitle': 'Mês fechado',
      'close.closedSubtitle': 'Este período é somente leitura.',
      'settings.title': 'Ajustes',
      'settings.subtitle': 'Personalize sua experiência.',
      'settings.preferences': 'Preferências',
      'settings.currency': 'Moeda',
      'settings.language': 'Idioma',
      'settings.theme': 'Tema',
      'settings.themeLight': 'Claro',
      'settings.themeDark': 'Escuro',
      'settings.themeMidnight': 'Extra escuro',
      'settings.startDay': 'Início do mês',
      'period.current': 'ATUAL',
      'period.closed': 'FECHADO',
      'period.custom': 'Personalizado',
      'settings.server': 'Usar servidor local (Flask)',
      'settings.data': 'Dados',
      'settings.export': 'Exportar JSON',
      'settings.import': 'Importar JSON',
      'settings.clear': 'Apagar todos os dados',
      'settings.clearConfirm': 'Tem certeza de que deseja apagar todos os dados?',
      'msg.dataReloaded': 'Dados recarregados',
      'msg.serverNotFound': 'Servidor local não encontrado',
      'msg.incomeAdded': 'Receita adicionada',
      'msg.fixedAdded': 'Despesa fixa adicionada',
      'msg.variableAdded': 'Despesa variável adicionada',
      'msg.goalAdded': 'Meta adicionada',
      'msg.amountExceeds': 'O valor excede a poupança disponível',
      'msg.amountInvalid': 'Insira um valor válido',
      'msg.extraExceeds': 'O valor excede a poupança extra',
      'msg.extraApplied': 'Poupança extra movida para disponível',
      'msg.noSavingsAvailable': 'Sem poupança disponível para distribuir',
      'msg.enterAmountOrPercent': 'Informe um valor ou percentual',
      'msg.percentTooHigh': 'Percentual total acima de 100%',
      'msg.amountTooHigh': 'O valor excede a poupança disponível',
      'msg.distributionApplied': 'Distribuição aplicada',
      'msg.extraDistributed': 'Poupança extra distribuída',
      'msg.goalUpdated': 'Meta atualizada',
      'msg.goalUsed': 'Você usou {amount} da meta \"{goal}\".',
      'msg.goalRemaining': 'Faltam {amount} para concluir.',
      'msg.goalNoteLogged': 'Registramos sua nota sobre \"{goal}\".',
      'msg.goalCompletedUsed': 'Você usou {amount} da meta {goal}.',
      'msg.goalCompletedAvailable': '{goal} concluída, poupança disponível',
      'msg.paymentAdded': 'Pagamento adicionado',
      'msg.paymentPaid': 'Pagamento marcado como pago',
      'msg.paymentDeleted': 'Pagamento removido',
      'msg.paymentUpdated': 'Pagamento atualizado',
      'msg.dataExported': 'Dados exportados',
      'msg.dataImported': 'Dados importados',
      'msg.fileInvalid': 'Arquivo inválido',
      'msg.dataCleared': 'Dados apagados',
      'search.placeholder': 'Buscar movimentações, metas ou categorias',
      'notes.placeholder': 'Escreva lembretes financeiros para este período...',
      'income.placeholder': 'Salário, freelance...',
      'income.empty': 'Nenhuma receita registrada',
      'fixed.placeholder': 'Aluguel, internet...',
      'fixed.empty': 'Nenhuma despesa fixa registrada',
      'variable.placeholder': 'Supermercado, café...',
      'variable.empty': 'Nenhuma despesa variável registrada',
      'payments.titlePlaceholder': 'Aluguel, empréstimo...',
      'payments.entityPlaceholder': 'Banco, amigo, empresa',
      'payments.descriptionPlaceholder': 'Detalhe curto',
      'payments.dayCount': '{count} pagamentos',
      'payments.empty': 'Sem pagamentos',
      'goals.placeholder': 'Viagem, emergência...',
      'goals.reasonPlaceholder': 'Motivo curto',
      'goals.historyTitle': 'Histórico',
      'goals.historyEmpty': 'Sem movimentações',
      'goals.archived': 'Arquivado',
      'goals.empty': 'Sem metas ativas',
      'goals.helpPercent': 'Informe percentuais da poupança disponível.',
      'goals.helpAmount': 'Informe valores da poupança disponível.',
      'goals.completionTitle': 'Meta concluída: {goal}',
      'goals.completionDetail': 'Você tem {amount} disponível.',
      'goals.adjustDeposit': 'Aportar em {goal}',
      'goals.adjustWithdraw': 'Retirar de {goal}',
      'goals.adjustPartial': 'Usei parte da poupança de {goal}',
      'goals.deleteDetail': '{goal} tem {amount}. Esse valor irá para {extra}.',
      'goals.deleteDetailEmpty': '{goal} será removida definitivamente.',
      'goals.historyUsed': 'Meta cumprida e utilizada',
      'goals.historyAvailable': 'Meta concluída, poupança disponível',
      'goals.historyExtra': 'Distribuição de poupança extra',
      'goals.historyDistribution': 'Distribuição de poupança ({period})',
      'history.searchPlaceholder': 'Nome, motivo...',
      'history.empty': 'Sem movimentações',
      'distribution.empty': 'Crie uma meta para distribuir sua poupança.',
      'insights.distributed': 'Você distribuiu {percent}% da sua poupança mensal.',
      'insights.topCategory': 'A principal categoria é {category} ({amount}).',
      'insights.noCategory': 'Ainda não há despesas por categoria.',
      'insights.available': 'Seu disponível atual é {amount}.',
      'kpi.entries': '{count} entradas',
      'kpi.movements': '{count} movimentações',
      'kpi.categoriesCount': '{count} categorias',
      'server.connected': 'Servidor conectado',
      'server.disconnected': 'Servidor desconectado',
      'close.summary': '{period}: {available} {label} ({startLabel} + {startAmount}).',
      'close.pendingCount': '{count} pendentes',
      'category.uncategorized': 'Sem categoria',
      'history.titleIncome': 'Receita: {name}',
      'history.titleFixed': 'Despesa fixa: {name}',
      'history.titleVariable': 'Despesa variável: {name}',
      'history.titleGoalNew': 'Nova meta: {name}',
      'history.titleGoalAdjusted': 'Meta ajustada: {name}',
      'history.titleGoalDeposit': 'Aporte em {name}',
      'history.titleGoalWithdraw': 'Retirada de {name}',
      'history.titleGoalCompleted': 'Meta concluída: {name}',
      'history.titleGoalAchieved': 'Meta cumprida: {name}',
      'history.titleGoalDeleted': 'Meta removida: {name}',
      'history.titleSavingsContribution': 'Aporte para {goal}',
      'history.titleExtraSavings': 'Poupança extra movida para disponível',
      'history.titlePayment': 'Pagamento: {title}',
      'history.titlePaymentPaid': 'Pagamento marcado como pago: {title}',
      'history.titleMonthClose': 'Fechar mês {period}'
    }
  };

  const CATEGORY_DEFS = [
    { id: 'housing', labels: { 'es-ES': 'Vivienda', 'en-US': 'Housing', 'pt-BR': 'Moradia' }, color: '#f59e0b' },
    { id: 'food', labels: { 'es-ES': 'Alimentación', 'en-US': 'Food', 'pt-BR': 'Alimentação' }, color: '#ef4444' },
    { id: 'transport', labels: { 'es-ES': 'Transporte', 'en-US': 'Transport', 'pt-BR': 'Transporte' }, color: '#0ea5a4' },
    { id: 'health', labels: { 'es-ES': 'Salud', 'en-US': 'Health', 'pt-BR': 'Saúde' }, color: '#22c55e' },
    { id: 'education', labels: { 'es-ES': 'Educación', 'en-US': 'Education', 'pt-BR': 'Educação' }, color: '#3b82f6' },
    { id: 'services', labels: { 'es-ES': 'Servicios', 'en-US': 'Utilities', 'pt-BR': 'Serviços' }, color: '#64748b' },
    { id: 'entertainment', labels: { 'es-ES': 'Ocio', 'en-US': 'Leisure', 'pt-BR': 'Lazer' }, color: '#f97316' },
    { id: 'subscriptions', labels: { 'es-ES': 'Suscripciones', 'en-US': 'Subscriptions', 'pt-BR': 'Assinaturas' }, color: '#06b6d4' },
    { id: 'other', labels: { 'es-ES': 'Otros', 'en-US': 'Other', 'pt-BR': 'Outros' }, color: '#94a3b8' }
  ];

  const GOAL_CATEGORIES = [
    { id: 'travel', labels: { 'es-ES': 'Viaje', 'en-US': 'Travel', 'pt-BR': 'Viagem' } },
    { id: 'gift', labels: { 'es-ES': 'Regalo', 'en-US': 'Gift', 'pt-BR': 'Presente' } },
    { id: 'emergency', labels: { 'es-ES': 'Emergencia', 'en-US': 'Emergency', 'pt-BR': 'Emergência' } },
    { id: 'home', labels: { 'es-ES': 'Casa', 'en-US': 'Home', 'pt-BR': 'Casa' } },
    { id: 'personal', labels: { 'es-ES': 'Personalizada', 'en-US': 'Personal', 'pt-BR': 'Personalizada' } }
  ];

  const CHART_DEFAULTS = {
    money: { type: 'doughnut', palette: 'default', compare: false },
    categories: { type: 'doughnut', palette: 'default', compare: false },
    goals: { type: 'doughnut', palette: 'default', compare: false }
  };

  const CHART_PALETTES = {
    default: ['#ef4444', '#16a34a', '#0ea5e9', '#f59e0b', '#0ea5a4', '#3b82f6'],
    vibrant: ['#f97316', '#22c55e', '#38bdf8', '#e11d48', '#14b8a6', '#a855f7'],
    soft: ['#fda4af', '#86efac', '#7dd3fc', '#fde68a', '#99f6e4', '#c4b5fd']
  };

  const DEFAULT_STATE = {
    settings: {
      currency: 'USD',
      locale: 'pt-BR',
      theme: 'light',
      startDay: 1,
      useServer: false
    },
    ui: {
      currentPeriodKey: '',
      overrideCurrentKey: '',
      showArchived: false,
      paymentMonthKey: '',
      selectedPaymentDate: '',
      chartPrefs: {},
      filters: {
        search: '',
        type: 'all',
        category: 'all'
      }
    },
    months: {},
    extraSavings: 0,
    goals: [],
    history: []
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));

  const mergeDefaults = (defaults, stored) => {
    if (Array.isArray(defaults)) {
      return Array.isArray(stored) ? stored : defaults;
    }
    if (typeof defaults === 'object' && defaults !== null) {
      const result = { ...defaults };
      if (stored && typeof stored === 'object') {
        Object.keys(stored).forEach((key) => {
          result[key] = mergeDefaults(defaults[key], stored[key]);
        });
      }
      return result;
    }
    return stored !== undefined ? stored : defaults;
  };

  const createId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return `id-${Math.random().toString(36).slice(2)}-${Date.now()}`;
  };

  class FinanceApp {
    constructor() {
      this.state = this.loadState();
      this.currentGoalId = null;
      this.adjustMode = null;
      this.currentPaymentId = null;
      this.pendingDeletePaymentId = null;
      this.charts = {};
      this.init();
    }

    init() {
      this.cacheElements();
      this.bindEvents();
      this.populateSelects();
      this.applyTranslations();
      this.initCharts();
      const nowKey = this.getPeriodKey(new Date(), this.state.settings.startDay);
      const loadedKey = this.state.ui.currentPeriodKey || nowKey;
      // Check if loaded period is closed, if so advance to next open month
      const actualKey = this.isMonthClosed(loadedKey) ? this.findNextOpenMonth(nowKey) : loadedKey;
      this.setCurrentPeriodKey(actualKey);
      this.applyTheme();
      this.renderAll();
      this.tryServerSync();
      
      // Initialize payment type visibility
      this.el.paymentType.dispatchEvent(new Event('change'));
    }

    cacheElements() {
      this.el = {
        body: document.body,
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebar-toggle'),
        closedBanner: document.getElementById('closed-banner'),
        navItems: document.querySelectorAll('.nav-item'),
        sectionTargets: document.querySelectorAll('[data-section-target]'),
        monthYear: document.getElementById('month-year'),
        periodPrev: document.getElementById('period-prev'),
        periodNext: document.getElementById('period-next'),
        periodBadge: document.getElementById('period-badge'),
        periodRange: document.getElementById('period-range'),
        saveState: document.getElementById('save-state'),
        refreshState: document.getElementById('refresh-state'),
        closeMonth: document.getElementById('close-month'),
        kpiIncome: document.getElementById('kpi-income'),
        kpiExpenses: document.getElementById('kpi-expenses'),
        kpiVariable: document.getElementById('kpi-variable'),
        kpiAvailable: document.getElementById('kpi-available'),
        kpiSavings: document.getElementById('kpi-savings'),
        kpiIncomeSub: document.getElementById('kpi-income-sub'),
        kpiExpensesSub: document.getElementById('kpi-expenses-sub'),
        kpiVariableSub: document.getElementById('kpi-variable-sub'),
        kpiAvailableSub: document.getElementById('kpi-available-sub'),
        kpiSavingsSub: document.getElementById('kpi-savings-sub'),
        miniAvailable: document.getElementById('mini-available'),
        miniSavings: document.getElementById('mini-savings'),
        chartMoneyTotal: document.getElementById('chart-money-total'),
        chartCategoryTotal: document.getElementById('chart-category-total'),
        chartGoalTotal: document.getElementById('chart-goal-total'),
        chartMoneyMeta: document.getElementById('chart-money-meta'),
        chartCategoryMeta: document.getElementById('chart-category-meta'),
        chartGoalMeta: document.getElementById('chart-goal-meta'),
        incomeForm: document.getElementById('income-form'),
        incomeName: document.getElementById('income-name'),
        incomeAmount: document.getElementById('income-amount'),
        incomeDate: document.getElementById('income-date'),
        incomeList: document.getElementById('income-list'),
        incomeTotal: document.getElementById('income-total'),
        savingsPercentage: document.getElementById('savings-percentage'),
        savingsPercentageValue: document.getElementById('savings-percentage-value'),
        savingsSuggested: document.getElementById('savings-suggested'),
        fixedForm: document.getElementById('fixed-form'),
        fixedName: document.getElementById('fixed-name'),
        fixedAmount: document.getElementById('fixed-amount'),
        fixedCategory: document.getElementById('fixed-category'),
        fixedList: document.getElementById('fixed-expense-list'),
        fixedTotal: document.getElementById('fixed-total'),
        variableForm: document.getElementById('variable-form'),
        variableName: document.getElementById('variable-name'),
        variableAmount: document.getElementById('variable-amount'),
        variableCategory: document.getElementById('variable-category'),
        variableDate: document.getElementById('variable-date'),
        variableList: document.getElementById('variable-expense-list'),
        variableTotal: document.getElementById('variable-total'),
        goalForm: document.getElementById('goal-form'),
        goalName: document.getElementById('goal-name'),
        goalCategory: document.getElementById('goal-category'),
        goalTarget: document.getElementById('goal-target'),
        goalsList: document.getElementById('goals-list'),
        goalsArchived: document.getElementById('goals-archived'),
        toggleArchived: document.getElementById('toggle-archived'),
        extraSavingsTotal: document.getElementById('extra-savings-total'),
        extraSavingsAmount: document.getElementById('extra-savings-amount'),
        extraSavingsAction: document.getElementById('extra-savings-action'),
        extraSavingsApply: document.getElementById('extra-savings-apply'),
        savingsSuggestedTotal: document.getElementById('savings-suggested-total'),
        savingsDistributed: document.getElementById('savings-distributed'),
        savingsRemaining: document.getElementById('savings-remaining'),
        distributionMode: document.getElementById('distribution-mode'),
        distributionList: document.getElementById('distribution-list'),
        distributeBtn: document.getElementById('distribute-btn'),
        distributionHelp: document.getElementById('distribution-help'),
        insightList: document.getElementById('insight-list'),
        monthNotes: document.getElementById('month-notes'),
        historySearch: document.getElementById('history-search'),
        historyType: document.getElementById('history-type'),
        historyCategory: document.getElementById('history-category'),
        historyList: document.getElementById('history-list'),
        paymentForm: document.getElementById('payment-form'),
        paymentTitle: document.getElementById('payment-title'),
        paymentEntity: document.getElementById('payment-entity'),
        paymentType: document.getElementById('payment-type'),
        paymentDescription: document.getElementById('payment-description'),
        paymentAmount: document.getElementById('payment-amount'),
        paymentDate: document.getElementById('payment-date'),
        paymentInstallments: document.getElementById('payment-installments'),
        paymentAutoInstallments: document.getElementById('payment-auto-installments'),
        paymentPrevMonth: document.getElementById('payment-prev-month'),
        paymentNextMonth: document.getElementById('payment-next-month'),
        paymentMonthLabel: document.getElementById('payment-month-label'),
        paymentCalendar: document.getElementById('payment-calendar'),
        paymentDayLabel: document.getElementById('payment-day-label'),
        paymentDayList: document.getElementById('payment-day-list'),
        currencySelect: document.getElementById('currency-select'),
        languageSelect: document.getElementById('language-select'),
        themeSelect: document.getElementById('theme-select'),
        startDay: document.getElementById('start-day'),
        startDayValue: document.getElementById('start-day-value'),
        useServer: document.getElementById('use-server'),
        serverStatus: document.getElementById('server-status'),
        exportData: document.getElementById('export-data'),
        importFile: document.getElementById('import-file'),
        clearData: document.getElementById('clear-data'),
        toast: document.getElementById('toast'),
        completionModal: document.getElementById('goal-completion-modal'),
        completionTitle: document.getElementById('goal-completion-title'),
        completionDetail: document.getElementById('goal-completion-detail'),
        adjustModal: document.getElementById('goal-adjust-modal'),
        adjustTitle: document.getElementById('goal-adjust-title'),
        adjustForm: document.getElementById('goal-adjust-form'),
        adjustAmount: document.getElementById('goal-adjust-amount'),
        adjustReason: document.getElementById('goal-adjust-reason'),
        goalBreakChoiceRow: document.getElementById('goal-break-choice-row'),
        goalBreakChoice: document.getElementById('goal-break-choice'),
        closeMonthModal: document.getElementById('close-month-modal'),
        closeMonthSummary: document.getElementById('close-month-summary'),
        closeMonthPendingMeta: document.getElementById('close-month-pending-meta'),
        closeMonthOptions: document.getElementById('close-month-options'),
        confirmCloseMonth: document.getElementById('confirm-close-month'),
        goalDeleteModal: document.getElementById('goal-delete-modal'),
        goalDeleteDetail: document.getElementById('goal-delete-detail'),
        confirmGoalDelete: document.getElementById('confirm-goal-delete'),
        paymentEditModal: document.getElementById('payment-edit-modal'),
        paymentEditForm: document.getElementById('payment-edit-form'),
        paymentEditAmount: document.getElementById('payment-edit-amount'),
        paymentEditPaid: document.getElementById('payment-edit-paid'),
        paymentEditDescription: document.getElementById('payment-edit-description'),
        paymentEditStatus: document.getElementById('payment-edit-status'),
        chartTypeSelects: document.querySelectorAll('[data-chart-type]'),
        chartPaletteSelects: document.querySelectorAll('[data-chart-palette]'),
        chartCompareToggles: document.querySelectorAll('[data-chart-compare]'),
        paymentConfirmedModal: document.getElementById('payment-confirmed-modal'),
        paymentDeleteConfirmModal: document.getElementById('payment-delete-confirm-modal'),
        confirmPaymentDeleteBtn: document.getElementById('confirm-payment-delete')
      };
    }

    bindEvents() {
      this.el.navItems.forEach((item) => {
        item.addEventListener('click', () => this.navigate(item.dataset.section));
      });

      this.el.sectionTargets.forEach((item) => {
        item.addEventListener('click', () => {
          const target = item.dataset.sectionTarget;
          if (target) {
            this.navigate(target);
          }
        });
      });

      this.el.sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        this.el.sidebar.classList.toggle('show');
      });

      // Close sidebar when clicking outside
      document.addEventListener('click', (e) => {
        if (this.el.sidebar.classList.contains('show') && 
            !this.el.sidebar.contains(e.target) && 
            !this.el.sidebarToggle.contains(e.target)) {
          this.el.sidebar.classList.remove('show');
        }
      });

      this.el.periodPrev.addEventListener('click', () => this.shiftPeriod(-1));
      this.el.periodNext.addEventListener('click', () => this.shiftPeriod(1));
      this.el.monthYear.addEventListener('change', (event) => {
        if (event.target.value) {
          this.setCurrentPeriodKey(event.target.value);
          this.renderAll();
        }
      });

      this.el.saveState.addEventListener('click', () => this.saveState());
      this.el.refreshState.addEventListener('click', () => this.refreshFromStorage());
      this.el.closeMonth.addEventListener('click', () => this.openCloseMonthModal());

      this.el.paymentType.addEventListener('change', (event) => {
        const isInstallment = event.target.value === 'installment';
        const installmentInput = this.el.paymentInstallments;
        // Find the parent label of the installment input
        const installmentLabel = installmentInput.closest('label');
        if (installmentLabel) {
          installmentLabel.style.display = isInstallment ? '' : 'none';
        }
        
        // Find the auto-installments toggle label if it exists (for compatibility)
        const autoLabel = this.el.paymentAutoInstallments?.closest('label');
        if (autoLabel) {
          autoLabel.style.display = 'none'; // Always hide it as logic is automatic now
        }
      });

      this.el.chartTypeSelects.forEach((select) => {
        select.addEventListener('change', (event) => this.updateChartPreference(event.target.dataset.chartType, 'type', event.target.value));
      });
      this.el.chartPaletteSelects.forEach((select) => {
        select.addEventListener('change', (event) => this.updateChartPreference(event.target.dataset.chartPalette, 'palette', event.target.value));
      });
      this.el.chartCompareToggles.forEach((toggle) => {
        toggle.addEventListener('change', (event) => this.updateChartPreference(event.target.dataset.chartCompare, 'compare', event.target.checked));
      });

      this.el.historySearch.addEventListener('input', (event) => {
        this.state.ui.filters.search = event.target.value;
        this.renderHistory();
      });

      this.el.historyType.addEventListener('change', (event) => {
        this.state.ui.filters.type = event.target.value;
        this.renderHistory();
      });

      this.el.historyCategory.addEventListener('change', (event) => {
        this.state.ui.filters.category = event.target.value;
        this.renderHistory();
      });

      this.el.incomeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addIncome();
      });

      this.el.fixedForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addFixedExpense();
      });

      this.el.variableForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addVariableExpense();
      });

      this.el.paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addPayment();
      });

      this.el.goalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addGoal();
      });

      this.el.savingsPercentage.addEventListener('input', (event) => {
        const month = this.getMonthData();
        month.savingsPercentage = Number(event.target.value);
        this.state.ui.currentPeriodKey = this.currentPeriodKey;
        this.saveState();
        this.renderAll();
      });

      this.el.distributionMode.addEventListener('change', () => {
        this.renderDistributionList();
      });

      this.el.distributeBtn.addEventListener('click', () => this.applyDistribution());
      this.el.extraSavingsApply.addEventListener('click', () => this.applyExtraSavings());

      this.el.toggleArchived.addEventListener('change', (event) => {
        this.state.ui.showArchived = event.target.checked;
        this.renderGoals();
      });

      this.el.monthNotes.addEventListener('input', (event) => {
        const month = this.getMonthData();
        month.notes = event.target.value;
        this.saveState();
      });

      this.el.paymentPrevMonth.addEventListener('click', () => this.shiftPaymentMonth(-1));
      this.el.paymentNextMonth.addEventListener('click', () => this.shiftPaymentMonth(1));
      this.el.paymentCalendar.addEventListener('click', (event) => this.handleCalendarClick(event));
      this.el.paymentDayList.addEventListener('click', (event) => this.handlePaymentActions(event));

      this.el.currencySelect.addEventListener('change', (event) => {
        this.state.settings.currency = event.target.value;
        this.saveState();
        this.renderAll();
      });

      this.el.languageSelect.addEventListener('change', (event) => {
        this.state.settings.locale = event.target.value;
        this.applyTranslations();
        this.populateSelects();
        this.renderAll();
      });

      this.el.themeSelect.addEventListener('change', (event) => {
        this.state.settings.theme = event.target.value;
        this.applyTheme();
        this.updateChartTheme();
        this.saveState();
      });

      this.el.startDay.addEventListener('input', (event) => {
        this.state.settings.startDay = Number(event.target.value);
        this.el.startDayValue.textContent = event.target.value;
        const nowKey = this.getPeriodKey(new Date(), this.state.settings.startDay);
        this.setCurrentPeriodKey(nowKey);
        this.saveState();
        this.renderAll();
      });

      this.el.useServer.addEventListener('change', (event) => {
        this.state.settings.useServer = event.target.checked;
        if (event.target.checked) {
          this.enableServerSync();
        } else {
          this.updateServerStatus(this.t('server.disconnected'));
        }
        this.saveState(false);
      });

      this.el.exportData.addEventListener('click', () => this.exportData());
      this.el.importFile.addEventListener('change', (event) => this.importData(event));
      this.el.clearData.addEventListener('click', () => this.clearData());

      this.el.incomeList.addEventListener('click', (event) => this.handleListActions(event));
      this.el.fixedList.addEventListener('click', (event) => this.handleListActions(event));
      this.el.variableList.addEventListener('click', (event) => this.handleListActions(event));
      this.el.goalsList.addEventListener('click', (event) => this.handleGoalActions(event));
      this.el.goalsArchived.addEventListener('click', (event) => this.handleGoalActions(event));

      this.el.completionModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-goal-action]')) {
          this.handleGoalCompletion(event.target.closest('[data-goal-action]').dataset.goalAction);
        }
        if (event.target.closest('[data-modal-close]') || event.target === this.el.completionModal) {
          this.closeModal(this.el.completionModal);
        }
      });

      this.el.adjustModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]') || event.target === this.el.adjustModal) {
          this.closeModal(this.el.adjustModal);
        }
      });

      this.el.adjustForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.applyGoalAdjustment();
      });

      this.el.goalBreakChoice.addEventListener('change', (event) => {
        if (event.target.value === 'yes') {
          this.el.adjustAmount.required = true;
        } else {
          this.el.adjustAmount.required = false;
          this.el.adjustAmount.value = '';
        }
      });

      this.el.closeMonthModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]') || event.target === this.el.closeMonthModal) {
          this.closeModal(this.el.closeMonthModal);
        }
      });

      this.el.confirmCloseMonth.addEventListener('click', () => this.confirmCloseMonth());

      this.el.goalDeleteModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]') || event.target === this.el.goalDeleteModal) {
          this.closeModal(this.el.goalDeleteModal);
        }
      });

      this.el.confirmGoalDelete.addEventListener('click', () => this.confirmGoalDeletion());

      this.el.paymentEditModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]') || event.target === this.el.paymentEditModal) {
          this.closeModal(this.el.paymentEditModal);
        }
      });

      this.el.paymentEditForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.applyPaymentEdit();
      });

      // Payment confirmation modals
      document.querySelectorAll('[data-modal="payment-confirmed-modal"]').forEach((btn) => {
        btn.addEventListener('click', () => this.closeModal(this.el.paymentConfirmedModal));
      });

      document.querySelectorAll('[data-modal="payment-delete-confirm-modal"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.dataset.action === 'cancel' || btn.classList.contains('modal-close')) {
            this.closeModal(this.el.paymentDeleteConfirmModal);
            this.pendingDeletePaymentId = null;
          }
        });
      });

      // Confirm payment deletion  
      if (this.el.confirmPaymentDeleteBtn) {
        this.el.confirmPaymentDeleteBtn.addEventListener('click', () => {
          if (this.pendingDeletePaymentId) {
            this.confirmDeletePayment(this.pendingDeletePaymentId);
          }
        });
      }

      // Payment quick actions in payment day list
      document.addEventListener('click', (e) => {
        const markPaidBtn = e.target.closest('[data-action="mark-payment-paid"]');
        const deleteBtn = e.target.closest('[data-action="delete-payment"]');
        
        if (markPaidBtn) {
          e.stopPropagation();
          const paymentId = markPaidBtn.dataset.id;
          this.markPaymentPaid(paymentId);
        }
        
        if (deleteBtn) {
          e.stopPropagation();
          const paymentId = deleteBtn.dataset.id;
          this.askDeletePayment(paymentId);
        }
      });
    }
    loadState() {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return clone(DEFAULT_STATE);
      try {
        const parsed = JSON.parse(stored);
        return mergeDefaults(DEFAULT_STATE, parsed);
      } catch (error) {
        return clone(DEFAULT_STATE);
      }
    }

    saveState(syncServer = true) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      if (syncServer && this.state.settings.useServer) {
        this.pushStateToServer();
      }
    }

    refreshFromStorage() {
      this.state = this.loadState();
      this.applyTheme();
      this.applyTranslations();
      this.populateSelects();
      this.renderAll();
      this.showToast(this.msg('msg.dataReloaded'));
    }

    tryServerSync() {
      if (!this.state.settings.useServer) {
        return;
      }
      fetch('/api/state')
        .then((response) => response.ok ? response.json() : null)
        .then((data) => {
          if (!data) {
            this.updateServerStatus(this.t('server.disconnected'));
            return;
          }
          if (Object.keys(data).length > 0) {
            this.state = mergeDefaults(DEFAULT_STATE, data);
            this.applyTheme();
            this.applyTranslations();
            this.setCurrentPeriodKey(this.state.ui.currentPeriodKey || this.getPeriodKey(new Date(), this.state.settings.startDay));
            this.renderAll();
          }
          this.updateServerStatus(this.t('server.connected'));
        })
        .catch(() => {
          this.updateServerStatus(this.t('server.disconnected'));
        });
    }

    enableServerSync() {
      fetch('/api/state')
        .then((response) => response.ok ? response.json() : null)
        .then((data) => {
          if (!data) {
            this.state.settings.useServer = false;
            this.el.useServer.checked = false;
            this.updateServerStatus(this.t('server.disconnected'));
            this.showToast(this.msg('msg.serverNotFound'), 'error');
            return;
          }
          if (Object.keys(data).length === 0 || this.isStateEmpty()) {
            this.pushStateToServer();
          } else {
            this.state = mergeDefaults(DEFAULT_STATE, data);
            this.renderAll();
          }
          this.updateServerStatus(this.t('server.connected'));
        })
        .catch(() => {
          this.state.settings.useServer = false;
          this.el.useServer.checked = false;
          this.updateServerStatus(this.t('server.disconnected'));
          this.showToast(this.msg('msg.serverNotFound'), 'error');
        });
    }

    pushStateToServer() {
      fetch('/api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      }).then(() => {
        this.updateServerStatus(this.t('server.connected'));
      }).catch(() => {
        this.updateServerStatus(this.t('server.disconnected'));
      });
    }

    updateServerStatus(message) {
      this.el.serverStatus.textContent = message;
    }

    isStateEmpty() {
      return Object.keys(this.state.months).length === 0 && this.state.goals.length === 0;
    }

    applyTheme() {
      this.el.body.setAttribute('data-theme', this.state.settings.theme);
      if (this.el.themeSelect) {
        this.el.themeSelect.value = this.state.settings.theme;
      }
      this.updateChartTheme();
    }

    applyTranslations() {
      const locale = this.state.settings.locale || 'en-US';
      const dictionary = TRANSLATIONS[locale] || TRANSLATIONS['en-US'];
      const fallback = TRANSLATIONS['en-US'];
      this.dictionary = dictionary;
      this.fallbackDictionary = fallback;
      document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.dataset.i18n;
        if (dictionary && dictionary[key]) {
          node.textContent = dictionary[key];
          return;
        }
        if (fallback && fallback[key]) {
          node.textContent = fallback[key];
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.dataset.i18nPlaceholder;
        const text = (dictionary && dictionary[key]) || (fallback && fallback[key]);
        if (text) {
          node.setAttribute('placeholder', text);
        }
      });
      document.documentElement.lang = locale.split('-')[0];
    }

    t(key) {
      if (this.dictionary && this.dictionary[key]) return this.dictionary[key];
      if (this.fallbackDictionary && this.fallbackDictionary[key]) return this.fallbackDictionary[key];
      return key;
    }

    msg(key, params = {}) {
      let text = this.t(key);
      Object.keys(params).forEach((param) => {
        text = text.replaceAll(`{${param}}`, params[param]);
      });
      return text;
    }

    getChartPreferences(chartKey) {
      const periodPrefs = this.state.ui.chartPrefs[this.currentPeriodKey] || {};
      return { ...CHART_DEFAULTS[chartKey], ...(periodPrefs[chartKey] || {}) };
    }

    updateChartPreference(chartKey, field, value) {
      if (!this.state.ui.chartPrefs[this.currentPeriodKey]) {
        this.state.ui.chartPrefs[this.currentPeriodKey] = {};
      }
      const current = this.state.ui.chartPrefs[this.currentPeriodKey][chartKey] || {};
      this.state.ui.chartPrefs[this.currentPeriodKey][chartKey] = { ...current, [field]: value };
      this.saveState();
      this.applyChartControls();
      this.updateCharts();
    }

    applyChartControls() {
      const moneyPrefs = this.getChartPreferences('money');
      const categoriesPrefs = this.getChartPreferences('categories');
      const goalsPrefs = this.getChartPreferences('goals');
      this.el.chartTypeSelects.forEach((select) => {
        const key = select.dataset.chartType;
        const prefs = this.getChartPreferences(key);
        select.value = prefs.type;
      });
      this.el.chartPaletteSelects.forEach((select) => {
        const key = select.dataset.chartPalette;
        const prefs = this.getChartPreferences(key);
        select.value = prefs.palette;
      });
      this.el.chartCompareToggles.forEach((toggle) => {
        toggle.checked = moneyPrefs.compare;
      });
    }

    populateSelects() {
      this.populateCategorySelect(this.el.fixedCategory);
      this.populateCategorySelect(this.el.variableCategory);
      this.populateCategorySelect(this.el.historyCategory, true);
      this.populateGoalCategorySelect();
      this.populateCurrencySelect();
      this.populateLanguageOptions();
      this.el.themeSelect.value = this.state.settings.theme;
      this.el.startDay.value = this.state.settings.startDay;
      this.el.startDayValue.textContent = this.state.settings.startDay;
      this.el.useServer.checked = this.state.settings.useServer;
    }

    populateLanguageOptions() {
      const labels = {
        'en-US': 'English',
        'es-ES': 'Español',
        'pt-BR': 'Português'
      };
      const locales = Object.keys(TRANSLATIONS);
      this.el.languageSelect.innerHTML = '';
      locales.forEach((locale) => {
        const option = document.createElement('option');
        option.value = locale;
        option.textContent = labels[locale] || locale;
        this.el.languageSelect.appendChild(option);
      });
      if (!TRANSLATIONS[this.state.settings.locale]) {
        this.state.settings.locale = 'en-US';
      }
      this.el.languageSelect.value = this.state.settings.locale;
    }

    populateGoalCategorySelect() {
      const locale = this.state.settings.locale || 'en-US';
      if (!this.el.goalCategory) return;
      this.el.goalCategory.innerHTML = '';
      GOAL_CATEGORIES.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.labels[locale] || category.labels['en-US'];
        this.el.goalCategory.appendChild(option);
      });
    }

    populateCategorySelect(select, includeAll = false) {
      const locale = this.state.settings.locale;
      select.innerHTML = '';
      if (includeAll) {
        const option = document.createElement('option');
        option.value = 'all';
        option.textContent = TRANSLATIONS[locale]?.['history.all'] || TRANSLATIONS['en-US']['history.all'];
        select.appendChild(option);
      }
      CATEGORY_DEFS.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.labels[locale] || category.labels['en-US'] || category.labels['es-ES'];
        select.appendChild(option);
      });
    }

    populateCurrencySelect() {
      const locale = this.state.settings.locale || 'en-US';
      let currencies = [];
      if (typeof Intl.supportedValuesOf === 'function') {
        try {
          currencies = Intl.supportedValuesOf('currency');
        } catch (error) {
          currencies = [];
        }
      }
      if (currencies.length === 0) {
        currencies = ['USD', 'EUR', 'GBP', 'BRL', 'JPY', 'MXN', 'ARS', 'CLP', 'COP', 'PEN'];
      }
      const displayNames = typeof Intl.DisplayNames === 'function'
        ? new Intl.DisplayNames([locale], { type: 'currency' })
        : null;

      this.el.currencySelect.innerHTML = '';
      currencies.sort().forEach((code) => {
        const option = document.createElement('option');
        const name = displayNames ? displayNames.of(code) : code;
        option.value = code;
        option.textContent = `${code} - ${name}`;
        this.el.currencySelect.appendChild(option);
      });
      this.el.currencySelect.value = this.state.settings.currency;
    }

    getPeriodKey(date, startDay) {
      const workingDate = new Date(date);
      const day = workingDate.getDate();
      let month = workingDate.getMonth();
      let year = workingDate.getFullYear();
      if (day < startDay) {
        month -= 1;
        if (month < 0) {
          month = 11;
          year -= 1;
        }
      }
      return `${year}-${String(month + 1).padStart(2, '0')}`;
    }

    setCurrentPeriodKey(key) {
      this.currentPeriodKey = key;
      this.state.ui.currentPeriodKey = key;
      this.el.monthYear.value = key;
      this.renderPeriodInfo();
      this.saveState(false);
    }

    shiftPeriod(offset) {
      const [year, month] = this.currentPeriodKey.split('-').map(Number);
      const date = new Date(year, month - 1 + offset, 1);
      this.setCurrentPeriodKey(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`);
      this.renderAll();
    }

    renderPeriodInfo() {
      const [year, month] = this.currentPeriodKey.split('-').map(Number);
      const startDay = this.state.settings.startDay;
      const start = new Date(year, month - 1, startDay);
      const end = new Date(year, month, startDay - 1);
      const locale = this.state.settings.locale || 'en-US';
      const formatter = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
      this.el.periodRange.textContent = `${formatter.format(start)} - ${formatter.format(end)}`;
      const nowKey = this.getPeriodKey(new Date(), startDay);
      if (this.state.ui.overrideCurrentKey && this.state.ui.overrideCurrentKey <= nowKey) {
        this.state.ui.overrideCurrentKey = '';
      }
      const activeKey = this.state.ui.overrideCurrentKey || nowKey;
      const dictionary = TRANSLATIONS[locale] || TRANSLATIONS['en-US'];
      
      // Determine badge status based on closed state and current month
      const isClosed = this.isMonthClosed(this.currentPeriodKey);
      const isCurrent = activeKey === this.currentPeriodKey;
      
      // Update badge text and styling
      if (isClosed) {
        this.el.periodBadge.textContent = dictionary['period.closed'] || 'CERRADO';
        this.el.periodBadge.className = 'badge badge-closed';
      } else if (isCurrent) {
        this.el.periodBadge.textContent = dictionary['period.current'] || 'ACTUAL';
        this.el.periodBadge.className = 'badge badge-current';
      } else {
        this.el.periodBadge.textContent = '';
        this.el.periodBadge.className = 'badge';
      }
      
      // Update closed banner visibility - only show for actually closed months
      if (this.el.closedBanner) {
        if (isClosed) {
          this.el.closedBanner.removeAttribute('hidden');
        } else {
          this.el.closedBanner.setAttribute('hidden', '');
        }
      }
    }

    getMonthData() {
      if (!this.state.months[this.currentPeriodKey]) {
        this.state.months[this.currentPeriodKey] = {
          incomes: [],
          fixedExpenses: [],
          variableExpenses: [],
          savingsPercentage: 10,
          savingsDistributed: 0,
          startBalance: 0,
          extraAvailable: 0,
          payments: [],
          notes: ''
        };
      }
      return this.state.months[this.currentPeriodKey];
    }

    getMonthDataByKey(key) {
      if (!this.state.months[key]) {
        this.state.months[key] = {
          incomes: [],
          fixedExpenses: [],
          variableExpenses: [],
          savingsPercentage: 10,
          savingsDistributed: 0,
          startBalance: 0,
          extraAvailable: 0,
          payments: [],
          notes: ''
        };
      }
      return this.state.months[key];
    }

    ensurePaymentView() {
      if (!this.state.ui.paymentMonthKey) {
        this.state.ui.paymentMonthKey = this.currentPeriodKey;
      }
      if (!this.state.ui.selectedPaymentDate) {
        const [year, month] = this.state.ui.paymentMonthKey.split('-').map(Number);
        const today = new Date();
        const day = Math.min(today.getDate(), new Date(year, month, 0).getDate());
        this.state.ui.selectedPaymentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      }
    }

    shiftPaymentMonth(offset) {
      const [year, month] = this.state.ui.paymentMonthKey.split('-').map(Number);
      const date = new Date(year, month - 1 + offset, 1);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      this.state.ui.paymentMonthKey = key;
      this.state.ui.selectedPaymentDate = `${key}-01`;
      this.renderPayments();
    }

    navigate(sectionId) {
      document.querySelectorAll('.section').forEach((section) => {
        section.classList.toggle('active', section.id === sectionId);
      });
      this.el.navItems.forEach((item) => {
        item.classList.toggle('active', item.dataset.section === sectionId);
      });
      if (window.innerWidth <= 1200) {
        this.el.sidebar.classList.remove('show');
      }
    }

    getCurrencySymbol() {
      const locale = this.state.settings.locale || 'en-US';
      const currency = this.state.settings.currency || 'USD';
      const symbolMap = {
        USD: '$',
        BRL: 'R$',
        EUR: '€',
        VES: 'Bs'
      };
      if (symbolMap[currency]) return symbolMap[currency];
      try {
        const parts = new Intl.NumberFormat(locale, {
          style: 'currency',
          currency,
          currencyDisplay: 'narrowSymbol'
        }).formatToParts(0);
        const symbol = parts.find((part) => part.type === 'currency')?.value;
        return symbol || currency;
      } catch (error) {
        return currency;
      }
    }

    formatCurrency(value) {
      const amount = Number(value) || 0;
      const locale = this.state.settings.locale || 'en-US';
      const currency = this.state.settings.currency || 'USD';
      const symbolMap = {
        USD: '$',
        BRL: 'R$',
        EUR: '€',
        VES: 'Bs'
      };
      if (symbolMap[currency]) {
        const formatted = new Intl.NumberFormat(locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(amount);
        return `${symbolMap[currency]} ${formatted}`;
      }
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol',
        maximumFractionDigits: 2
      }).format(amount);
    }

    parseDateValue(dateString) {
      if (!dateString) return null;
      if (dateString.includes('T')) {
        return new Date(dateString);
      }
      const parts = dateString.split('-').map(Number);
      if (parts.length === 3 && parts.every((part) => !Number.isNaN(part))) {
        const [year, month, day] = parts;
        return new Date(year, month - 1, day);
      }
      return new Date(dateString);
    }

    formatDate(dateString) {
      if (!dateString) return '';
      const locale = this.state.settings.locale || 'en-US';
      const date = this.parseDateValue(dateString);
      return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
    }

    addIncome() {
      const name = this.el.incomeName.value.trim();
      const amount = Number(this.el.incomeAmount.value);
      if (!name || amount <= 0) return;
      const date = this.el.incomeDate.value || new Date().toISOString().split('T')[0];
      const month = this.getMonthData();
      month.incomes.unshift({
        id: createId(),
        name,
        amount,
        date
      });
      this.addHistory({
        type: 'income',
        title: this.msg('history.titleIncome', { name }),
        amount,
        date,
        category: null
      });
      this.el.incomeForm.reset();
      this.el.incomeDate.value = date;
      this.saveState();
      this.renderAll();
      this.showToast(this.msg('msg.incomeAdded'));
    }

    addFixedExpense() {
      const name = this.el.fixedName.value.trim();
      const amount = Number(this.el.fixedAmount.value);
      const category = this.el.fixedCategory.value;
      if (!name || amount <= 0) return;
      const month = this.getMonthData();
      month.fixedExpenses.unshift({
        id: createId(),
        name,
        amount,
        category
      });
      this.addHistory({
        type: 'expense',
        title: this.msg('history.titleFixed', { name }),
        amount,
        date: new Date().toISOString().split('T')[0],
        category
      });
      this.el.fixedForm.reset();
      this.saveState();
      this.renderAll();
      this.showToast(this.msg('msg.fixedAdded'));
    }

    addVariableExpense() {
      const name = this.el.variableName.value.trim();
      const amount = Number(this.el.variableAmount.value);
      const category = this.el.variableCategory.value;
      const date = this.el.variableDate.value || new Date().toISOString().split('T')[0];
      if (!name || amount <= 0) return;
      const month = this.getMonthData();
      month.variableExpenses.unshift({
        id: createId(),
        name,
        amount,
        category,
        date
      });
      this.addHistory({
        type: 'expense',
        title: this.msg('history.titleVariable', { name }),
        amount,
        date,
        category
      });
      this.el.variableForm.reset();
      this.el.variableDate.value = date;
      this.saveState();
      this.renderAll();
      this.showToast(this.msg('msg.variableAdded'));
    }

    addGoal() {
      const name = this.el.goalName.value.trim();
      const target = Number(this.el.goalTarget.value);
      const category = this.el.goalCategory ? this.el.goalCategory.value : 'personal';
      if (!name || target <= 0) return;
      this.state.goals.unshift({
        id: createId(),
        name,
        target,
        category,
        current: 0,
        status: 'active',
        createdAt: new Date().toISOString(),
        history: []
      });
      this.addHistory({
        type: 'goal',
        title: this.msg('history.titleGoalNew', { name }),
        amount: target,
        date: new Date().toISOString().split('T')[0],
        category: null
      });
      this.el.goalForm.reset();
      this.saveState();
      this.renderAll();
      this.showToast(this.msg('msg.goalAdded'));
    }

    handleListActions(event) {
      const target = event.target.closest('[data-action]');
      if (!target) return;
      const action = target.dataset.action;
      const id = target.dataset.id;
      const month = this.getMonthData();
      if (action === 'delete-income') {
        month.incomes = month.incomes.filter((item) => item.id !== id);
      }
      if (action === 'delete-fixed') {
        month.fixedExpenses = month.fixedExpenses.filter((item) => item.id !== id);
      }
      if (action === 'delete-variable') {
        month.variableExpenses = month.variableExpenses.filter((item) => item.id !== id);
      }
      this.saveState();
      this.renderAll();
    }

    handleGoalActions(event) {
      const target = event.target.closest('[data-action]');
      if (!target) return;
      const goalId = target.dataset.id;
      const action = target.dataset.action;
      if (action === 'complete-goal') {
        this.openCompletionModal(goalId);
      }
      if (action === 'break-goal') {
        this.openAdjustModal(goalId, 'break');
      }
      if (action === 'delete-goal') {
        this.openGoalDeleteModal(goalId);
      }
    }

    openCompletionModal(goalId) {
      const goal = this.state.goals.find((item) => item.id === goalId);
      if (!goal) return;
      this.currentGoalId = goalId;
      this.el.completionTitle.textContent = this.msg('goals.completionTitle', { goal: goal.name });
      this.el.completionDetail.textContent = this.msg('goals.completionDetail', { amount: this.formatCurrency(goal.current) });
      this.openModal(this.el.completionModal);
    }

    openAdjustModal(goalId, mode) {
      const goal = this.state.goals.find((item) => item.id === goalId);
      if (!goal) return;
      this.currentGoalId = goalId;
      this.adjustMode = mode;
      this.el.goalBreakChoiceRow.classList.add('hidden');
      this.el.adjustAmount.required = true;
      if (mode === 'deposit') {
        this.el.adjustTitle.textContent = this.msg('goals.adjustDeposit', { goal: goal.name });
      } else if (mode === 'partial') {
        this.el.adjustTitle.textContent = this.msg('goals.adjustPartial', { goal: goal.name });
      } else if (mode === 'break') {
        this.el.adjustTitle.textContent = this.t('goals.break');
        this.el.goalBreakChoiceRow.classList.remove('hidden');
        this.el.goalBreakChoice.value = 'yes';
        this.el.adjustAmount.required = true;
      } else {
        this.el.adjustTitle.textContent = this.msg('goals.adjustWithdraw', { goal: goal.name });
      }
      this.el.adjustForm.reset();
      this.openModal(this.el.adjustModal);
    }

    applyGoalAdjustment() {
      const goal = this.state.goals.find((item) => item.id === this.currentGoalId);
      if (!goal) return;
      const amount = Number(this.el.adjustAmount.value);
      const reason = this.el.adjustReason.value.trim();
      const before = goal.current;
      const date = new Date().toISOString().split('T')[0];

      if (this.adjustMode === 'break') {
        const choice = this.el.goalBreakChoice.value;
        if (!reason) return;
        let usedAmount = 0;
        if (choice === 'yes') {
          if (!amount || amount <= 0) return;
          if (amount > goal.current) {
            this.showToast(this.msg('msg.amountExceeds'), 'error');
            return;
          }
          usedAmount = amount;
          goal.current -= usedAmount;
        }
        goal.status = goal.current >= goal.target ? 'completed' : 'active';
        goal.history.unshift({
          id: createId(),
          date,
          type: 'break',
          amount: usedAmount,
          reason,
          before,
          after: goal.current
        });
        this.addHistory({
          type: 'goal',
          title: this.msg('history.titleGoalAdjusted', { name: goal.name }),
          amount: usedAmount,
          date,
          category: null
        });
        this.closeModal(this.el.adjustModal);
        this.saveState();
        this.renderAll();
        if (choice === 'yes') {
          this.showToast(this.msg('msg.goalUsed', { amount: this.formatCurrency(usedAmount), goal: goal.name }));
          const remaining = Math.max(goal.target - goal.current, 0);
          setTimeout(() => {
            this.showToast(this.msg('msg.goalRemaining', { amount: this.formatCurrency(remaining) }));
          }, 1200);
        } else {
          this.showToast(this.msg('msg.goalNoteLogged', { goal: goal.name }));
        }
        return;
      }

      if (!amount || amount <= 0 || !reason) return;
      const isWithdraw = this.adjustMode === 'withdraw' || this.adjustMode === 'partial';
      if (isWithdraw && amount > goal.current) {
        this.showToast(this.msg('msg.amountExceeds'), 'error');
        return;
      }
      goal.current = this.adjustMode === 'deposit' ? goal.current + amount : goal.current - amount;
      goal.status = goal.current >= goal.target ? 'completed' : 'active';
      goal.history.unshift({
        id: createId(),
        date,
        type: this.adjustMode === 'deposit' ? 'deposit' : 'withdraw',
        amount,
        reason,
        before,
        after: goal.current
      });
      this.addHistory({
        type: 'goal',
        title: this.adjustMode === 'deposit'
          ? this.msg('history.titleGoalDeposit', { name: goal.name })
          : this.msg('history.titleGoalWithdraw', { name: goal.name }),
        amount,
        date,
        category: null
      });
      this.closeModal(this.el.adjustModal);
      this.saveState();
      this.renderAll();
      if (this.adjustMode === 'partial') {
        const remaining = Math.max(goal.target - goal.current, 0);
        this.showToast(this.msg('msg.goalUsed', { amount: this.formatCurrency(amount), goal: goal.name }));
        setTimeout(() => {
          this.showToast(this.msg('msg.goalRemaining', { amount: this.formatCurrency(remaining) }));
        }, 1200);
      } else {
        this.showToast(this.msg('msg.goalUpdated'));
      }
    }

    handleGoalCompletion(action) {
      const goal = this.state.goals.find((item) => item.id === this.currentGoalId);
      if (!goal) return;
      const date = new Date().toISOString().split('T')[0];
      if (action === 'use-all') {
        goal.status = 'archived';
        goal.history.unshift({
          id: createId(),
          date,
          type: 'complete',
          amount: goal.current,
          reason: this.t('goals.historyUsed'),
          before: goal.current,
          after: goal.current
        });
        this.addHistory({
          type: 'goal',
          title: this.msg('history.titleGoalAchieved', { name: goal.name }),
          amount: goal.current,
          date,
          category: null
        });
        this.showToast(this.msg('msg.goalCompletedUsed', { amount: this.formatCurrency(goal.current), goal: goal.name }));
      }
      if (action === 'use-partial') {
        this.closeModal(this.el.completionModal);
        this.openAdjustModal(goal.id, 'partial');
        return;
      }
      if (action === 'not-used') {
        goal.status = 'completed';
        goal.history.unshift({
          id: createId(),
          date,
          type: 'complete',
          amount: goal.current,
          reason: this.t('goals.historyAvailable'),
          before: goal.current,
          after: goal.current
        });
        this.addHistory({
          type: 'goal',
          title: this.msg('history.titleGoalCompleted', { name: goal.name }),
          amount: goal.current,
          date,
          category: null
        });
        this.showToast(this.msg('msg.goalCompletedAvailable', { goal: goal.name }));
      }
      this.closeModal(this.el.completionModal);
      this.saveState();
      this.renderAll();
    }

    archiveGoal(goalId) {
      const goal = this.state.goals.find((item) => item.id === goalId);
      if (!goal) return;
      goal.status = 'archived';
      this.saveState();
      this.renderGoals();
    }

    applyExtraSavings() {
      const amount = Number(this.el.extraSavingsAmount.value);
      if (!amount || amount <= 0) {
        this.showToast(this.msg('msg.amountInvalid'), 'error');
        return;
      }
      if (amount > (this.state.extraSavings || 0)) {
        this.showToast(this.msg('msg.extraExceeds'), 'error');
        return;
      }
      const action = this.el.extraSavingsAction.value;
      if (action === 'available') {
        const month = this.getMonthData();
        month.extraAvailable = (month.extraAvailable || 0) + amount;
        this.state.extraSavings -= amount;
        this.addHistory({
          type: 'savings',
          title: this.t('history.titleExtraSavings'),
          amount,
          date: new Date().toISOString().split('T')[0],
          category: null
        });
        this.saveState();
        this.renderAll();
        this.showToast(this.msg('msg.extraApplied'));
        return;
      }
      this.applyDistribution(amount, true);
      this.state.extraSavings -= amount;
      this.saveState();
      this.renderAll();
    }

    applyDistribution(overrideAmount = null, isExtra = false) {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      const available = overrideAmount !== null ? overrideAmount : (totals.savingsSuggested - month.savingsDistributed);
      if (available <= 0) {
        this.showToast(this.msg('msg.noSavingsAvailable'), 'error');
        return;
      }
      const mode = this.el.distributionMode.value;
      const rows = Array.from(this.el.distributionList.querySelectorAll('input'));
      const allocations = [];
      let totalInput = 0;
      rows.forEach((input) => {
        const value = Number(input.value) || 0;
        if (value > 0) {
          totalInput += value;
          allocations.push({ id: input.dataset.id, value });
        }
      });
      if (allocations.length === 0) {
        this.showToast(this.msg('msg.enterAmountOrPercent'), 'error');
        return;
      }
      if (mode === 'percent' && totalInput > 100) {
        this.showToast(this.msg('msg.percentTooHigh'), 'error');
        return;
      }
      if (mode === 'amount' && totalInput > available) {
        this.showToast(this.msg('msg.amountTooHigh'), 'error');
        return;
      }
      const date = new Date().toISOString().split('T')[0];
      allocations.forEach((allocation) => {
        const goal = this.state.goals.find((item) => item.id === allocation.id);
        if (!goal || goal.status === 'archived') return;
        const amount = mode === 'percent' ? (available * allocation.value) / 100 : allocation.value;
        if (amount <= 0) return;
        const before = goal.current;
        goal.current += amount;
        goal.status = goal.current >= goal.target ? 'completed' : 'active';
        goal.history.unshift({
          id: createId(),
          date,
          type: 'deposit',
          amount,
          reason: isExtra ? this.t('goals.historyExtra') : this.msg('goals.historyDistribution', { period: this.currentPeriodKey }),
          before,
          after: goal.current
        });
        this.addHistory({
          type: 'savings',
          title: this.msg('history.titleSavingsContribution', { goal: goal.name }),
          amount,
          date,
          category: null
        });
        if (!isExtra) {
          month.savingsDistributed += amount;
        }
      });
      this.saveState();
      this.renderAll();
      this.showToast(this.msg(isExtra ? 'msg.extraDistributed' : 'msg.distributionApplied'));
    }

    calculateTotals(month) {
      const incomeTotal = month.incomes.reduce((sum, item) => sum + item.amount, 0);
      const fixedTotal = month.fixedExpenses.reduce((sum, item) => sum + item.amount, 0);
      const variableTotal = month.variableExpenses.reduce((sum, item) => sum + item.amount, 0);
      const expensesTotal = fixedTotal + variableTotal;
      const savingsSuggested = incomeTotal * (month.savingsPercentage / 100);
      const startBalance = month.startBalance || 0;
      const extraAvailable = month.extraAvailable || 0;
      const available = incomeTotal + startBalance + extraAvailable - expensesTotal - savingsSuggested;
      return {
        incomeTotal,
        fixedTotal,
        variableTotal,
        expensesTotal,
        savingsSuggested,
        available,
        startBalance,
        extraAvailable
      };
    }

    isMonthClosed(key = this.currentPeriodKey) {
      if (!this.state.months[key]) return false;
      return Boolean(this.state.months[key].closedAt);
    }

    applyClosedState() {
      const isClosed = this.isMonthClosed(this.currentPeriodKey);
      if (this.el.closedBanner) {
        if (isClosed) {
          this.el.closedBanner.removeAttribute('hidden');
        } else {
          this.el.closedBanner.setAttribute('hidden', '');
        }
      }
      document.querySelectorAll('[data-month-section]').forEach((section) => {
        section.classList.toggle('is-closed', isClosed);
        const controls = section.querySelectorAll('input, select, textarea, button');
        controls.forEach((control) => {
          if (control.dataset.allowClosed === 'true') return;
          control.disabled = isClosed;
        });
      });
    }

    renderAll() {
      const month = this.getMonthData();
      this.el.savingsPercentage.value = month.savingsPercentage || 0;
      this.el.savingsPercentageValue.textContent = `${month.savingsPercentage || 0}%`;
      this.el.monthNotes.value = month.notes || '';
      const today = new Date().toISOString().split('T')[0];
      if (!this.el.incomeDate.value) this.el.incomeDate.value = today;
      if (!this.el.variableDate.value) this.el.variableDate.value = today;
      if (!this.el.paymentDate.value) this.el.paymentDate.value = today;
      this.ensurePaymentView();
      this.renderKpis();
      this.renderIncomeList();
      this.renderFixedList();
      this.renderVariableList();
      this.renderGoals();
      this.renderExtraSavings();
      this.renderDistributionList();
      this.renderPayments();
      this.renderHistory();
      this.renderInsights();
      this.applyChartControls();
      this.updateCharts();
      this.applyClosedState();
      this.saveState(false);
    }

    renderKpis() {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      this.el.kpiIncome.textContent = this.formatCurrency(totals.incomeTotal);
      this.el.kpiExpenses.textContent = this.formatCurrency(totals.expensesTotal);
      this.el.kpiVariable.textContent = this.formatCurrency(totals.variableTotal);
      this.el.kpiAvailable.textContent = this.formatCurrency(totals.available);
      this.el.kpiSavings.textContent = this.formatCurrency(totals.savingsSuggested);
      this.el.kpiIncomeSub.textContent = this.msg('kpi.entries', { count: month.incomes.length });
      this.el.kpiExpensesSub.textContent = this.msg('kpi.movements', { count: month.fixedExpenses.length + month.variableExpenses.length });
      this.el.kpiVariableSub.textContent = this.msg('kpi.categoriesCount', { count: this.getCategoryTotals(month).length });
      const baseLabel = totals.startBalance > 0 ? `${this.t('kpi.startBalance')} ${this.formatCurrency(totals.startBalance)}` : this.t('kpi.availableSub');
      this.el.kpiAvailableSub.textContent = baseLabel;
      this.el.kpiSavingsSub.textContent = this.t('kpi.savingsSub');
      this.el.miniAvailable.textContent = this.formatCurrency(totals.available);
      this.el.miniSavings.textContent = this.formatCurrency(totals.savingsSuggested);
      this.el.savingsSuggested.textContent = this.formatCurrency(totals.savingsSuggested);
      this.el.savingsSuggestedTotal.textContent = this.formatCurrency(totals.savingsSuggested);
      this.el.savingsDistributed.textContent = this.formatCurrency(month.savingsDistributed);
      this.el.savingsRemaining.textContent = this.formatCurrency(Math.max(totals.savingsSuggested - month.savingsDistributed, 0));
      this.el.chartMoneyTotal.textContent = this.formatCurrency(totals.incomeTotal);
      this.el.chartCategoryTotal.textContent = this.formatCurrency(totals.expensesTotal);
      this.el.chartGoalTotal.textContent = this.formatCurrency(this.state.goals.reduce((sum, goal) => sum + goal.current, 0));
    }

    renderIncomeList() {
      const month = this.getMonthData();
      this.el.incomeList.innerHTML = '';
      if (month.incomes.length === 0) {
        this.el.incomeList.innerHTML = `<div class="list-item">${this.t('income.empty')}</div>`;
      } else {
        month.incomes.forEach((item) => {
          const div = document.createElement('div');
          div.className = 'list-item';
          div.innerHTML = `
            <div>
              <strong>${item.name}</strong>
              <div class="list-meta">${this.formatDate(item.date)}</div>
            </div>
            <div class="list-actions">
              <span>${this.formatCurrency(item.amount)}</span>
              <button class="icon-button" data-action="delete-income" data-id="${item.id}">✕</button>
            </div>
          `;
          this.el.incomeList.appendChild(div);
        });
      }
      const total = month.incomes.reduce((sum, item) => sum + item.amount, 0);
      this.el.incomeTotal.textContent = this.formatCurrency(total);
    }

    renderFixedList() {
      const month = this.getMonthData();
      this.el.fixedList.innerHTML = '';
      if (month.fixedExpenses.length === 0) {
        this.el.fixedList.innerHTML = `<div class="list-item">${this.t('fixed.empty')}</div>`;
      } else {
        month.fixedExpenses.forEach((item) => {
          const div = document.createElement('div');
          div.className = 'list-item';
          div.innerHTML = `
            <div>
              <strong>${item.name}</strong>
              <div class="list-meta">${this.getCategoryLabel(item.category)}</div>
            </div>
            <div class="list-actions">
              <span>${this.formatCurrency(item.amount)}</span>
              <button class="icon-button" data-action="delete-fixed" data-id="${item.id}">✕</button>
            </div>
          `;
          this.el.fixedList.appendChild(div);
        });
      }
      const total = month.fixedExpenses.reduce((sum, item) => sum + item.amount, 0);
      this.el.fixedTotal.textContent = this.formatCurrency(total);
    }

    renderVariableList() {
      const month = this.getMonthData();
      this.el.variableList.innerHTML = '';
      if (month.variableExpenses.length === 0) {
        this.el.variableList.innerHTML = `<div class="list-item">${this.t('variable.empty')}</div>`;
      } else {
        month.variableExpenses.forEach((item) => {
          const div = document.createElement('div');
          div.className = 'list-item';
          div.innerHTML = `
            <div>
              <strong>${item.name}</strong>
              <div class="list-meta">${this.getCategoryLabel(item.category)} · ${this.formatDate(item.date)}</div>
            </div>
            <div class="list-actions">
              <span>${this.formatCurrency(item.amount)}</span>
              <button class="icon-button" data-action="delete-variable" data-id="${item.id}">✕</button>
            </div>
          `;
          this.el.variableList.appendChild(div);
        });
      }
      const total = month.variableExpenses.reduce((sum, item) => sum + item.amount, 0);
      this.el.variableTotal.textContent = this.formatCurrency(total);
    }
    renderGoals() {
      const activeGoals = this.state.goals.filter((goal) => goal.status !== 'archived');
      const archivedGoals = this.state.goals.filter((goal) => goal.status === 'archived');

      this.el.goalsList.innerHTML = '';
      this.el.goalsArchived.innerHTML = '';

      if (activeGoals.length === 0) {
        this.el.goalsList.innerHTML = `<div class="list-item">${this.t('goals.empty')}</div>`;
      } else {
        activeGoals.forEach((goal) => {
          this.el.goalsList.appendChild(this.buildGoalCard(goal));
        });
      }

      archivedGoals.forEach((goal) => {
        this.el.goalsArchived.appendChild(this.buildGoalCard(goal, true));
      });

      if (this.state.ui.showArchived && archivedGoals.length > 0) {
        this.el.goalsArchived.classList.add('show');
      } else {
        this.el.goalsArchived.classList.remove('show');
      }

      this.el.toggleArchived.checked = this.state.ui.showArchived;
    }

    renderExtraSavings() {
      this.el.extraSavingsTotal.textContent = this.formatCurrency(this.state.extraSavings || 0);
      if ((this.state.extraSavings || 0) <= 0) {
        this.el.extraSavingsApply.disabled = true;
        this.el.extraSavingsApply.classList.add('btn-ghost');
      } else {
        this.el.extraSavingsApply.disabled = false;
        this.el.extraSavingsApply.classList.remove('btn-ghost');
      }
    }

    buildGoalCard(goal, archived = false) {
      const progress = goal.target > 0 ? Math.min((goal.current / goal.target) * 100, 100) : 0;
      const card = document.createElement('div');
      card.className = `goal-card ${goal.status === 'completed' ? 'completed' : ''}`;
      const actions = archived
        ? `<span class="list-meta">${this.t('goals.archived')}</span>`
        : `
          ${goal.current >= goal.target ? `<button class="btn btn-primary" data-action="complete-goal" data-id="${goal.id}">${this.t('goals.completed')}</button>` : ''}
          <button class="btn btn-ghost" data-action="break-goal" data-id="${goal.id}">${this.t('goals.break')}</button>
          <button class="btn btn-danger" data-action="delete-goal" data-id="${goal.id}">${this.t('goals.delete')}</button>
        `;

      card.innerHTML = `
        <div class="goal-header">
          <div>
            <strong>${goal.name}</strong>
            <div class="muted">${this.formatCurrency(goal.current)} / ${this.formatCurrency(goal.target)}</div>
            <div class="list-meta">${this.getGoalCategoryLabel(goal.category)} · ${this.formatDate(goal.createdAt)}</div>
          </div>
          <span class="chip">${progress.toFixed(0)}%</span>
        </div>
        <div class="goal-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
        <div class="goal-actions">${actions}</div>
        <details class="goal-history">
          <summary>${this.t('goals.historyTitle')}</summary>
          <div>
            ${(goal.history || []).slice(0, 4).map((entry) => {
              const before = entry.before !== undefined ? this.formatCurrency(entry.before) : '-';
              const after = entry.after !== undefined ? this.formatCurrency(entry.after) : '-';
              return `
                <div class="history-item">
                  <div>
                    <strong>${entry.type === 'withdraw' ? '-' : '+'}${this.formatCurrency(entry.amount)}</strong>
                    <div class="list-meta">${entry.reason} · ${before} → ${after}</div>
                  </div>
                  <small>${this.formatDate(entry.date)}</small>
                </div>
              `;
            }).join('') || `<div class="list-meta">${this.t('goals.historyEmpty')}</div>`}
          </div>
        </details>
      `;
      return card;
    }

    renderDistributionList() {
      const activeGoals = this.state.goals.filter((goal) => goal.status === 'active');
      this.el.distributionList.innerHTML = '';
      if (activeGoals.length === 0) {
        this.el.distributionList.innerHTML = `<div class="list-meta">${this.t('distribution.empty')}</div>`;
        return;
      }
      const mode = this.el.distributionMode.value;
      const symbol = this.getCurrencySymbol();
      activeGoals.forEach((goal) => {
        const row = document.createElement('div');
        row.className = 'distribution-row';
        row.innerHTML = `
          <div>
            <strong>${goal.name}</strong>
            <div class="list-meta">${this.formatCurrency(goal.current)} / ${this.formatCurrency(goal.target)}</div>
          </div>
          <input type="number" min="0" step="0.01" data-id="${goal.id}" placeholder="${mode === 'percent' ? '%' : symbol}">
        `;
        this.el.distributionList.appendChild(row);
      });
      this.el.distributionHelp.textContent = mode === 'percent'
        ? this.t('goals.helpPercent')
        : this.t('goals.helpAmount');
    }

    renderPayments() {
      const monthKey = this.state.ui.paymentMonthKey || this.currentPeriodKey;
      this.state.ui.paymentMonthKey = monthKey;
      const [year, month] = monthKey.split('-').map(Number);
      if (!this.state.ui.selectedPaymentDate || !this.state.ui.selectedPaymentDate.startsWith(monthKey)) {
        const lastDay = new Date(year, month, 0).getDate();
        const day = Math.min(1, lastDay);
        this.state.ui.selectedPaymentDate = `${monthKey}-${String(day).padStart(2, '0')}`;
      } else {
        const lastDay = new Date(year, month, 0).getDate();
        const selectedDay = Number(this.state.ui.selectedPaymentDate.slice(8)) || 1;
        if (selectedDay > lastDay) {
          this.state.ui.selectedPaymentDate = `${monthKey}-${String(lastDay).padStart(2, '0')}`;
        }
      }
      const locale = this.state.settings.locale || 'en-US';
      this.el.paymentMonthLabel.textContent = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })
        .format(new Date(year, month - 1, 1));
      this.renderPaymentCalendar(monthKey);
      this.renderPaymentDayList(this.state.ui.selectedPaymentDate);
    }

    renderPaymentCalendar(monthKey) {
      const [year, month] = monthKey.split('-').map(Number);
      const monthData = this.getMonthDataByKey(monthKey);
      const payments = monthData.payments || [];
      const locale = this.state.settings.locale || 'en-US';
      const dayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
      const dayLabels = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(2021, 7, 1 + i);
        return dayFormatter.format(date);
      });

      this.el.paymentCalendar.innerHTML = '';
      dayLabels.forEach((label) => {
        const header = document.createElement('div');
        header.className = 'calendar-day label';
        header.textContent = label;
        this.el.paymentCalendar.appendChild(header);
      });

      const firstDay = new Date(year, month - 1, 1).getDay();
      const totalDays = new Date(year, month, 0).getDate();
      for (let i = 0; i < firstDay; i += 1) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day empty';
        this.el.paymentCalendar.appendChild(empty);
      }

      for (let day = 1; day <= totalDays; day += 1) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayPayments = payments.filter((payment) => payment.date === dateStr);
        const status = this.getPaymentStatus(dayPayments);
        const cell = document.createElement('div');
        const selected = dateStr === this.state.ui.selectedPaymentDate ? 'selected' : '';
        cell.className = `calendar-day ${status} ${selected}`;
        cell.dataset.date = dateStr;
        const countLabel = dayPayments.length
          ? this.msg('payments.dayCount', { count: dayPayments.length })
          : this.t('payments.legendNone');
        cell.innerHTML = `
          <div class="day-number">${day}</div>
          <div class="list-meta">${countLabel}</div>
        `;
        this.el.paymentCalendar.appendChild(cell);
      }
    }

    renderPaymentDayList(dateStr) {
      if (!dateStr) {
        this.el.paymentDayList.innerHTML = `<div class="empty-message">${this.t('payments.empty')}</div>`;
        return;
      }
      const locale = this.state.settings.locale || 'en-US';
      const formatter = new Intl.DateTimeFormat(locale, { dateStyle: 'full' });
      this.el.paymentDayLabel.textContent = formatter.format(new Date(dateStr + 'T12:00:00'));
      
      const monthKey = dateStr.slice(0, 7);
      const monthData = this.getMonthDataByKey(monthKey);
      const dayPayments = (monthData.payments || []).filter((payment) => payment.date === dateStr);
      
      this.el.paymentDayList.innerHTML = '';
      if (dayPayments.length === 0) {
        this.el.paymentDayList.innerHTML = `<div class="empty-message">${this.t('payments.legendNone')}</div>`;
        return;
      }
      
      dayPayments.forEach((payment) => {
        const card = document.createElement('div');
        card.className = 'payment-card';
        if (payment.status === 'paid') card.classList.add('paid');
        
        const installmentInfo = payment.installment 
          ? `<div class="payment-installment">${payment.installment.current}/${payment.installment.total}</div>`
          : '';
        
        const entityLabel = payment.entity ? `${payment.entity} • ` : '';
        const typeLabel = this.getPaymentTypeLabel(payment.type);
        
        card.innerHTML = `
          <div class="payment-card-header">
            <div class="payment-card-title">
              <strong>${payment.title}</strong>
              ${installmentInfo}
              <div class="payment-card-meta">${entityLabel}${typeLabel}</div>
            </div>
            <div class="payment-card-amount">${this.formatCurrency(payment.amount)}</div>
          </div>
          <div class="payment-card-description">${payment.description || ''}</div>
          <div class="payment-card-actions">
            <button class="btn-card-action btn-delete" data-action="delete-payment" data-id="${payment.id}" title="${this.t('payments.delete')}">✖</button>
            <button class="btn-card-action btn-mark-paid" data-action="mark-payment-paid" data-id="${payment.id}" title="${this.t('payments.markPaid')}">${payment.status === 'paid' ? '✓' : '✔'}</button>
          </div>
        `;
        
        this.el.paymentDayList.appendChild(card);
      });
      
      // Note: Event listeners are now handled globally in bindEvents(), no need for inline listeners
    }

    togglePaymentPaid(id) {
      const result = this.findPaymentById(id);
      if (!result) return;
      const payment = result.payment;
      payment.status = payment.status === 'paid' ? 'pending' : 'paid';
      payment.paidAmount = payment.status === 'paid' ? payment.amount : 0;
      this.saveState();
      this.renderPayments();
      // Re-render the specific day list to update UI immediately
      this.renderPaymentDayList(this.state.ui.selectedPaymentDate);
      this.showToast(payment.status === 'paid' ? this.msg('msg.paymentPaid') : this.msg('msg.paymentUpdated'));
    }


    handleCalendarClick(event) {
      const target = event.target.closest('.calendar-day');
      if (!target || !target.dataset.date) return;
      this.state.ui.selectedPaymentDate = target.dataset.date;
      this.renderPayments();
    }

    getPaymentStatus(dayPayments) {
      if (!dayPayments || dayPayments.length === 0) return 'neutral';
      const statuses = dayPayments.map((payment) => payment.status);
      if (statuses.every((status) => status === 'paid')) return 'paid';
      if (statuses.some((status) => status === 'partial')) return 'partial';
      if (statuses.some((status) => status === 'overdue')) return 'pending';
      return 'pending';
    }

    getPaymentTypeLabel(type) {
      const map = {
        debt: this.t('payments.typeDebt'),
        installment: this.t('payments.typeInstallment'),
        service: this.t('payments.typeService'),
        loan: this.t('payments.typeLoan'),
        custom: this.t('payments.typeCustom')
      };
      return map[type] || type;
    }

    getPaymentStatusLabel(status) {
      const map = {
        pending: this.t('payments.statusPending'),
        partial: this.t('payments.statusPartial'),
        paid: this.t('payments.statusPaid'),
        overdue: this.t('payments.statusOverdue')
      };
      return map[status] || status;
    }

    addPayment() {
      const title = this.el.paymentTitle.value.trim();
      const entity = this.el.paymentEntity.value.trim();
      const type = this.el.paymentType.value;
      const description = this.el.paymentDescription.value.trim();
      const amount = Number(this.el.paymentAmount.value);
      const date = this.el.paymentDate.value;
      const installments = Number(this.el.paymentInstallments.value) || 1;
      const auto = this.el.paymentAutoInstallments.checked;
      if (!title || !amount || !date) return;

      const basePayment = {
        id: createId(),
        title,
        entity,
        type,
        description,
        amount,
        paidAmount: 0,
        date,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      if (type === 'installment' && installments > 1) {
        basePayment.installment = { current: 1, total: installments };
        basePayment.title = this.getInstallmentTitle(title, 1, installments);
      }

      const monthKey = date.slice(0, 7);
      this.state.ui.paymentMonthKey = monthKey;
      this.state.ui.selectedPaymentDate = date;
      this.getMonthDataByKey(monthKey).payments.unshift(basePayment);

      if (type === 'installment' && installments > 1) {
        for (let i = 2; i <= installments; i += 1) {
          const installmentDate = this.addMonthsToDate(date, i - 1);
          const installmentPayment = {
            ...basePayment,
            id: createId(),
            date: installmentDate,
            status: 'pending',
            paidAmount: 0,
            installment: { current: i, total: installments },
            title: this.getInstallmentTitle(title, i, installments)
          };
          const key = installmentDate.slice(0, 7);
          this.getMonthDataByKey(key).payments.unshift(installmentPayment);
        }
      }

      this.addHistory({
        type: 'payment',
        title: this.msg('history.titlePayment', { title }),
        amount,
        date,
        category: null
      });

      this.el.paymentForm.reset();
      this.el.paymentDate.value = date;
      this.renderPayments();
      this.saveState();
      this.showToast(this.msg('msg.paymentAdded'));
    }

    addMonthsToDate(dateStr, offset) {
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1 + offset, day);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const safeDay = Math.min(day, lastDay);
      const safeDate = new Date(date.getFullYear(), date.getMonth(), safeDay);
      return `${safeDate.getFullYear()}-${String(safeDate.getMonth() + 1).padStart(2, '0')}-${String(safeDate.getDate()).padStart(2, '0')}`;
    }

    getInstallmentTitle(title, current, total) {
      const prefix = this.t('payments.installmentPrefix');
      return `${prefix} ${current}/${total} - ${title}`;
    }

    handlePaymentActions(event) {
      const target = event.target.closest('[data-action]');
      if (!target) return;
      const paymentId = target.dataset.id;
      const action = target.dataset.action;
      if (action === 'payment-paid') {
        this.markPaymentAsPaid(paymentId);
      }
      if (action === 'payment-edit') {
        this.openPaymentEditModal(paymentId);
      }
      if (action === 'payment-delete') {
        this.deletePayment(paymentId);
      }
    }

    deletePayment(paymentId) {
      const result = this.findPaymentById(paymentId);
      if (!result) return;
      
      const { payment, monthKey } = result;
      
      // If it's an installment, show confirmation
      if (payment.installment) {
        const confirmMsg = this.msg('payments.deleteInstallmentConfirm', {
          title: payment.title
        });
        if (!confirm(confirmMsg)) return;
      }
      
      const month = this.getMonthDataByKey(monthKey);
      month.payments = month.payments.filter((item) => item.id !== paymentId);
      
      this.addHistory({
        type: 'payment',
        title: this.msg('history.titlePaymentDeleted', { title: payment.title }),
        amount: payment.amount,
        date: new Date().toISOString().split('T')[0],
        category: null
      });

      this.saveState();
      this.renderPayments();
      // Re-render the specific day list to update UI immediately
      this.renderPaymentDayList(this.state.ui.selectedPaymentDate);
      this.showToast(this.msg('msg.paymentDeleted'));
    }

    findPaymentById(paymentId) {
      const monthKeys = Object.keys(this.state.months);
      for (const key of monthKeys) {
        const month = this.getMonthDataByKey(key);
        const payment = (month.payments || []).find((item) => item.id === paymentId);
        if (payment) {
          return { monthKey: key, payment };
        }
      }
      return null;
    }

    markPaymentAsPaid(paymentId) {
      const result = this.findPaymentById(paymentId);
      if (!result) return;
      result.payment.status = 'paid';
      result.payment.paidAmount = result.payment.amount;
      this.addHistory({
        type: 'payment',
        title: this.msg('history.titlePaymentPaid', { title: result.payment.title }),
        amount: result.payment.amount,
        date: result.payment.date,
        category: null
      });
      this.saveState();
      this.renderPayments();
      this.showToast(this.msg('msg.paymentPaid'));
    }

    deletePayment(paymentId) {
      const result = this.findPaymentById(paymentId);
      if (!result) return;
      const month = this.getMonthDataByKey(result.monthKey);
      month.payments = month.payments.filter((item) => item.id !== paymentId);
      this.saveState();
      this.renderPayments();
      this.showToast(this.msg('msg.paymentDeleted'));
    }

    openPaymentEditModal(paymentId) {
      const result = this.findPaymentById(paymentId);
      if (!result) return;
      this.currentPaymentId = paymentId;
      this.el.paymentEditAmount.value = result.payment.amount;
      this.el.paymentEditPaid.value = result.payment.paidAmount || 0;
      this.el.paymentEditDescription.value = result.payment.description || '';
      this.el.paymentEditStatus.value = result.payment.status;
      this.openModal(this.el.paymentEditModal);
    }

    applyPaymentEdit() {
      const result = this.findPaymentById(this.currentPaymentId);
      if (!result) return;
      const amount = Number(this.el.paymentEditAmount.value);
      const paidAmount = Number(this.el.paymentEditPaid.value) || 0;
      const status = this.el.paymentEditStatus.value;
      result.payment.amount = amount;
      result.payment.paidAmount = Math.min(paidAmount, amount);
      result.payment.status = status;
      result.payment.description = this.el.paymentEditDescription.value.trim();
      this.closeModal(this.el.paymentEditModal);
    this.saveState();
    this.renderPayments();
    this.showToast(this.msg('msg.paymentUpdated'));
  }

  markPaymentPaid(paymentId) {
    const result = this.findPaymentById(paymentId);
    if (!result) return;

    const payment = result.payment;
    const month = this.getMonthDataByKey(result.monthKey);

    // Calculate available money
    const totals = this.calculateTotals(month);
    const availableMoney = totals.available; // Already calculated: income - fixed - variable - goals

    // Validate if there's enough money
    if (availableMoney < payment.amount) {
      // Show insufficient funds modal
      this.showInsufficientFundsModal(payment.amount, availableMoney);
      return; // Don't mark as paid
    }

    // Mark the payment as paid
    payment.status = 'paid';
    payment.paidAmount = payment.amount;

    // Add to variable expenses automatically
    // Fix: Use payment.title (not payment.description)
    const variableExpense = {
      id: createId(),
      amount: payment.amount,
      category: 'Gastos Variables',
      title: payment.title || 'Pago',
      date: new Date().toISOString().split('T')[0]
    };

    month.variableExpenses.push(variableExpense);

    // Save and update
    this.saveState();
    this.renderPayments();
    this.renderAll();

    // Show friendly success modal
    this.openModal(this.el.paymentConfirmedModal);
  }

  showInsufficientFundsModal(required, available) {
    // Create and show modal dynamically
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'insufficient-funds-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>💰 ${this.t('payments.insufficientFunds') || 'Dinero insuficiente'}</h2>
        </div>
        <div class="modal-body">
          <p>${this.t('payments.insufficientFundsMessage') || 'No tienes suficiente dinero disponible para confirmar este pago.'}</p>
          <div style="margin: 20px 0; padding: 15px; background: var(--surface-variant); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>${this.t('payments.available') || 'Disponible'}:</span>
              <strong>${this.formatCurrency(available)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>${this.t('payments.required') || 'Necesitas'}:</span>
              <strong style="color: var(--error)">${this.formatCurrency(required)}</strong>
            </div>
          </div>
          <p style="font-size: 0.9em; color: var(--text-muted);">
            ${this.t('payments.insufficientFundsHint') || 'El pago permanecerá pendiente hasta que tengas fondos suficientes.'}
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-modal-close>${this.t('common.understood') || 'Entendido'}</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close handler
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-modal-close]') || e.target === modal) {
        document.body.removeChild(modal);
      }
    });
    
    // Show modal
    setTimeout(() => modal.classList.add('show'), 10);
  }

  askDeletePayment(paymentId) {
    // Store the ID for later confirmation
    this.pendingDeletePaymentId = paymentId;
    
    // Show friendly warning modal
    this.openModal(this.el.paymentDeleteConfirmModal);
  }

  confirmDeletePayment(paymentId) {
    const result = this.findPaymentById(paymentId);
    if (!result) return;

    const month = this.getMonthDataByKey(result.monthKey);
    month.payments = month.payments.filter((item) => item.id !== paymentId);
    
    // Close modal and clear pending ID
    this.closeModal(this.el.paymentDeleteConfirmModal);
    this.pendingDeletePaymentId = null;

    // Save and update
    this.saveState();
    this.renderPayments();
    this.renderAll();

    this.showToast('Pago eliminado correctamente');
  }

    openCloseMonthModal() {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      const locale = this.state.settings.locale || 'en-US';
      const [year, monthValue] = this.currentPeriodKey.split('-').map(Number);
      const periodLabel = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })
        .format(new Date(year, monthValue - 1, 1));
      const pendingPayments = (month.payments || []).filter((payment) => payment.status !== 'paid');
      this.el.closeMonthSummary.textContent = this.msg('close.summary', {
        period: periodLabel,
        available: this.formatCurrency(totals.available),
        label: this.t('kpi.available'),
        startLabel: this.t('kpi.startBalance'),
        startAmount: this.formatCurrency(totals.startBalance)
      });
      this.el.closeMonthPendingMeta.textContent = pendingPayments.length
        ? this.msg('close.pendingCount', { count: pendingPayments.length })
        : this.t('payments.legendNone');
      if (pendingPayments.length === 0) {
        this.el.closeMonthOptions.classList.add('hidden');
      } else {
        this.el.closeMonthOptions.classList.remove('hidden');
      }
      this.openModal(this.el.closeMonthModal);
    }

    confirmCloseMonth() {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      const pendingPayments = (month.payments || []).filter((payment) => payment.status !== 'paid');
      const pendingAction = document.querySelector('input[name="pending-action"]:checked')?.value || 'move';

      if (pendingPayments.length > 0) {
        if (pendingAction === 'move') {
          pendingPayments.forEach((payment) => {
            const newDate = this.addMonthsToDate(payment.date, 1);
            const key = newDate.slice(0, 7);
            const nextMonth = this.getMonthDataByKey(key);
            nextMonth.payments.unshift({ ...payment, date: newDate });
          });
          month.payments = (month.payments || []).filter((payment) => payment.status === 'paid');
        } else {
          pendingPayments.forEach((payment) => {
            payment.status = 'overdue';
          });
        }
      }

      month.closedAt = new Date().toISOString();
      const nextKey = this.addMonthsToDate(`${this.currentPeriodKey}-01`, 1).slice(0, 7);
      const nextMonth = this.getMonthDataByKey(nextKey);
      nextMonth.startBalance = (nextMonth.startBalance || 0) + totals.available;

      this.addHistory({
        type: 'month',
        title: this.msg('history.titleMonthClose', { period: this.currentPeriodKey }),
        amount: totals.available,
        date: new Date().toISOString().split('T')[0],
        category: null
      });

      this.state.ui.paymentMonthKey = nextKey;
      this.state.ui.selectedPaymentDate = `${nextKey}-01`;
      this.state.ui.overrideCurrentKey = nextKey;
      this.setCurrentPeriodKey(nextKey);
      this.closeModal(this.el.closeMonthModal);
      this.saveState();
      this.renderAll();
      this.showToast(this.t('close.success'));
    }

    openGoalDeleteModal(goalId) {
      const goal = this.state.goals.find((item) => item.id === goalId);
      if (!goal) return;
      this.currentGoalId = goalId;
      if (goal.current > 0) {
        this.el.goalDeleteDetail.textContent = this.msg('goals.deleteDetail', {
          goal: goal.name,
          amount: this.formatCurrency(goal.current),
          extra: this.t('goals.extra').toLowerCase()
        });
      } else {
        this.el.goalDeleteDetail.textContent = this.msg('goals.deleteDetailEmpty', { goal: goal.name });
      }
      this.openModal(this.el.goalDeleteModal);
    }

    confirmGoalDeletion() {
      const goalIndex = this.state.goals.findIndex((item) => item.id === this.currentGoalId);
      if (goalIndex === -1) return;
      const goal = this.state.goals[goalIndex];
      if (goal.current > 0) {
        this.state.extraSavings = (this.state.extraSavings || 0) + goal.current;
      }
      this.state.goals.splice(goalIndex, 1);
      this.addHistory({
        type: 'goal',
        title: this.msg('history.titleGoalDeleted', { name: goal.name }),
        amount: goal.current,
        date: new Date().toISOString().split('T')[0],
        category: null
      });
      this.closeModal(this.el.goalDeleteModal);
      this.saveState();
      this.renderAll();
      this.showToast(this.t('goals.deleteSuccess'));
    }

    renderHistory() {
      const filters = this.state.ui.filters;
      const locale = this.state.settings.locale || 'en-US';
      const history = [...this.state.history].sort((a, b) => this.parseDateValue(b.date) - this.parseDateValue(a.date));
      const filtered = history.filter((entry) => {
        const matchesSearch = !filters.search || entry.title.toLowerCase().includes(filters.search.toLowerCase());
        const matchesType = filters.type === 'all' || entry.type === filters.type;
        const matchesCategory = filters.category === 'all' || entry.category === filters.category;
        return matchesSearch && matchesType && matchesCategory;
      });

      if (filtered.length === 0) {
        this.el.historyList.innerHTML = `<div class="list-item">${this.t('history.empty')}</div>`;
        return;
      }

      const grouped = {};
      filtered.forEach((entry) => {
        const date = this.parseDateValue(entry.date);
        const key = `${date.getFullYear()}-${date.getMonth()}`;
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(entry);
      });

      this.el.historyList.innerHTML = '';
      Object.keys(grouped).forEach((key) => {
        const [year, month] = key.split('-').map(Number);
        const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(year, month, 1));
        const group = document.createElement('div');
        group.className = 'history-group';
        group.innerHTML = `<strong>${title}</strong>`;
        grouped[key].forEach((entry) => {
          const item = document.createElement('div');
          item.className = 'history-item';
          item.innerHTML = `
            <div>
              <strong>${entry.title}</strong>
              <div class="list-meta">${entry.category ? this.getCategoryLabel(entry.category) : this.t('history.general')}</div>
            </div>
            <div>
              <div>${this.formatCurrency(entry.amount)}</div>
              <small>${this.formatDate(entry.date)}</small>
            </div>
          `;
          group.appendChild(item);
        });
        this.el.historyList.appendChild(group);
      });
    }

    renderInsights() {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      const savingsProgress = totals.savingsSuggested ? Math.min((month.savingsDistributed / totals.savingsSuggested) * 100, 100) : 0;
      const topCategory = this.getCategoryTotals(month)[0];
      this.el.insightList.innerHTML = '';
      const insights = [
        this.msg('insights.distributed', { percent: savingsProgress.toFixed(0) }),
        topCategory
          ? this.msg('insights.topCategory', { category: topCategory.label, amount: this.formatCurrency(topCategory.amount) })
          : this.t('insights.noCategory'),
        this.msg('insights.available', { amount: this.formatCurrency(totals.available) })
      ];
      insights.forEach((text) => {
        const div = document.createElement('div');
        div.className = 'insight';
        div.textContent = text;
        this.el.insightList.appendChild(div);
      });
    }

    getCategoryTotals(month) {
      const totals = {};
      month.fixedExpenses.concat(month.variableExpenses).forEach((expense) => {
        if (!totals[expense.category]) totals[expense.category] = 0;
        totals[expense.category] += expense.amount;
      });
      return Object.keys(totals).map((key) => ({
        id: key,
        label: this.getCategoryLabel(key),
        amount: totals[key]
      })).sort((a, b) => b.amount - a.amount);
    }

    getCategoryLabel(categoryId) {
      const locale = this.state.settings.locale;
      const category = CATEGORY_DEFS.find((item) => item.id === categoryId);
      if (!category) return this.t('category.uncategorized');
      return category.labels[locale] || category.labels['en-US'] || category.labels['es-ES'];
    }

    getGoalCategoryLabel(categoryId) {
      const locale = this.state.settings.locale;
      const category = GOAL_CATEGORIES.find((item) => item.id === categoryId);
      if (!category) return this.t('goals.category');
      return category.labels[locale] || category.labels['en-US'];
    }

    addHistory(entry) {
      this.state.history.unshift({
        id: createId(),
        ...entry
      });
    }

    initCharts() {
      const chartFont = {
        family: getComputedStyle(document.body).fontFamily,
        size: 12
      };
      Chart.defaults.font = chartFont;
      Chart.defaults.color = getComputedStyle(document.body).color;
      this.chartContexts = {
        money: document.getElementById('chart-money'),
        categories: document.getElementById('chart-categories'),
        goals: document.getElementById('chart-goals')
      };
      this.updateCharts();
    }

    updateChartTheme() {
      if (!window.Chart) return;
      Chart.defaults.color = getComputedStyle(document.body).color;
      Object.values(this.charts).forEach((chart) => {
        if (chart) {
          chart.update();
        }
      });
    }

    getChartColors(paletteName, count) {
      const palette = CHART_PALETTES[paletteName] || CHART_PALETTES.default;
      return Array.from({ length: count }, (_, index) => palette[index % palette.length]);
    }

    hexToRgba(hex, alpha) {
      if (!hex || hex[0] !== '#') return hex;
      const value = hex.replace('#', '');
      const bigint = parseInt(value.length === 3 ? value.split('').map((c) => c + c).join('') : value, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    ensureChart(chartKey, type, data, options) {
      const ctx = this.chartContexts[chartKey];
      if (!ctx) return;
      if (this.charts[chartKey]) {
        if (this.charts[chartKey].config.type !== type) {
          this.charts[chartKey].destroy();
          this.charts[chartKey] = null;
        }
      }
      if (!this.charts[chartKey]) {
        this.charts[chartKey] = new Chart(ctx, { type, data, options });
        return;
      }
      this.charts[chartKey].data = data;
      this.charts[chartKey].options = options;
      this.charts[chartKey].update();
    }

    getRecentMonthKeys(count) {
      const [year, month] = this.currentPeriodKey.split('-').map(Number);
      const keys = [];
      for (let i = count - 1; i >= 0; i -= 1) {
        const date = new Date(year, month - 1 - i, 1);
        keys.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`);
      }
      return keys;
    }

    updateCharts() {
      const month = this.getMonthData();
      const totals = this.calculateTotals(month);
      const moneyPrefs = this.getChartPreferences('money');
      const categoryPrefs = this.getChartPreferences('categories');
      const goalPrefs = this.getChartPreferences('goals');

      const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const parsed = context.parsed;
                const value = typeof parsed === 'object' && parsed !== null ? parsed.y : parsed;
                const amount = Number(value ?? context.raw ?? 0);
                return this.formatCurrency(amount);
              }
            }
          }
        }
      };

      const moneyColors = this.getChartColors(moneyPrefs.palette, 3);
      if (moneyPrefs.compare) {
        const keys = this.getRecentMonthKeys(6);
        const labels = keys.map((key) => {
          const [year, monthValue] = key.split('-').map(Number);
          return new Intl.DateTimeFormat(this.state.settings.locale, { month: 'short' }).format(new Date(year, monthValue - 1, 1));
        });
        const incomeData = keys.map((key) => this.calculateTotals(this.getMonthDataByKey(key)).incomeTotal);
        const expenseData = keys.map((key) => this.calculateTotals(this.getMonthDataByKey(key)).expensesTotal);
        const availableData = keys.map((key) => this.calculateTotals(this.getMonthDataByKey(key)).available);
        const data = {
          labels,
          datasets: [
            {
              label: this.t('charts.income'),
              data: incomeData,
              borderColor: moneyColors[0],
              backgroundColor: this.hexToRgba(moneyColors[0], 0.2),
              tension: 0.3,
              fill: true
            },
            {
              label: this.t('charts.expenses'),
              data: expenseData,
              borderColor: moneyColors[1],
              backgroundColor: this.hexToRgba(moneyColors[1], 0.2),
              tension: 0.3,
              fill: true
            },
            {
              label: this.t('charts.available'),
              data: availableData,
              borderColor: moneyColors[2],
              backgroundColor: this.hexToRgba(moneyColors[2], 0.2),
              tension: 0.3,
              fill: true
            }
          ]
        };
        const options = {
          ...baseOptions,
          plugins: { ...baseOptions.plugins, legend: { display: true, position: 'bottom' } },
          scales: { y: { beginAtZero: true } }
        };
        this.ensureChart('money', 'line', data, options);
      } else {
        const labels = [this.t('charts.expenses'), this.t('charts.savings'), this.t('charts.available')];
        const values = [totals.expensesTotal, totals.savingsSuggested, Math.max(totals.available, 0)];
        const data = {
          labels,
          datasets: [{
            data: values,
            backgroundColor: moneyPrefs.type === 'line' ? this.hexToRgba(moneyColors[0], 0.2) : moneyColors,
            borderColor: moneyPrefs.type === 'line' ? moneyColors[0] : moneyColors,
            borderWidth: 0,
            tension: 0.3,
            fill: moneyPrefs.type === 'line'
          }]
        };
        const options = moneyPrefs.type === 'doughnut'
          ? { ...baseOptions, cutout: '70%' }
          : { ...baseOptions, scales: { y: { beginAtZero: true } } };
        this.ensureChart('money', moneyPrefs.type, data, options);
      }

      this.el.chartMoneyMeta.innerHTML = `
        <span>${this.t('charts.expenses')}: ${this.formatCurrency(totals.expensesTotal)}</span>
        <span>${this.t('charts.savings')}: ${this.formatCurrency(totals.savingsSuggested)}</span>
        <span>${this.t('charts.available')}: ${this.formatCurrency(totals.available)}</span>
      `;

      const categoryTotals = this.getCategoryTotals(month);
      const categoryColors = this.getChartColors(categoryPrefs.palette, categoryTotals.length || 1);
      const categoryData = {
        labels: categoryTotals.map((item) => item.label),
        datasets: [{
          data: categoryTotals.map((item) => item.amount),
          backgroundColor: categoryPrefs.type === 'line' ? this.hexToRgba(categoryColors[0], 0.2) : categoryColors,
          borderColor: categoryPrefs.type === 'line' ? categoryColors[0] : categoryColors,
          borderWidth: 0,
          tension: 0.3,
          fill: categoryPrefs.type === 'line'
        }]
      };
      const categoryOptions = categoryPrefs.type === 'doughnut'
        ? { ...baseOptions, cutout: '70%' }
        : { ...baseOptions, scales: { y: { beginAtZero: true } } };
      this.ensureChart('categories', categoryPrefs.type, categoryData, categoryOptions);
      this.el.chartCategoryMeta.innerHTML = categoryTotals.slice(0, 3).map((item) => `<span>${item.label}: ${this.formatCurrency(item.amount)}</span>`).join('');

      const goalData = this.state.goals.filter((goal) => goal.status !== 'archived');
      const goalColors = this.getChartColors(goalPrefs.palette, goalData.length || 1);
      const goalsChartData = {
        labels: goalData.map((goal) => goal.name),
        datasets: [{
          data: goalData.map((goal) => goal.current),
          backgroundColor: goalPrefs.type === 'line' ? this.hexToRgba(goalColors[0], 0.2) : goalColors,
          borderColor: goalPrefs.type === 'line' ? goalColors[0] : goalColors,
          borderWidth: 0,
          tension: 0.3,
          fill: goalPrefs.type === 'line'
        }]
      };
      const goalOptions = goalPrefs.type === 'doughnut'
        ? { ...baseOptions, cutout: '70%' }
        : { ...baseOptions, scales: { y: { beginAtZero: true } } };
      this.ensureChart('goals', goalPrefs.type, goalsChartData, goalOptions);
      this.el.chartGoalMeta.innerHTML = goalData.slice(0, 3).map((goal) => `<span>${goal.name}: ${this.formatCurrency(goal.current)}</span>`).join('');
    }

    exportData() {
      const dataStr = JSON.stringify(this.state, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `finanzas-${this.currentPeriodKey}.json`;
      link.click();
      URL.revokeObjectURL(url);
      this.showToast(this.msg('msg.dataExported'));
    }

    importData(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          this.state = mergeDefaults(DEFAULT_STATE, data);
          this.applyTheme();
          this.applyTranslations();
          this.populateSelects();
          this.setCurrentPeriodKey(this.state.ui.currentPeriodKey || this.getPeriodKey(new Date(), this.state.settings.startDay));
          this.saveState();
          this.renderAll();
          this.showToast(this.msg('msg.dataImported'));
        } catch (error) {
          this.showToast(this.msg('msg.fileInvalid'), 'error');
        }
      };
      reader.readAsText(file);
    }

    clearData() {
      if (!confirm(this.t('settings.clearConfirm'))) return;
      this.state = clone(DEFAULT_STATE);
      this.applyTheme();
      this.applyTranslations();
      this.populateSelects();
      this.updateServerStatus(this.t('server.disconnected'));
      this.setCurrentPeriodKey(this.getPeriodKey(new Date(), this.state.settings.startDay));
      this.saveState();
      this.renderAll();
      this.showToast(this.msg('msg.dataCleared'));
    }

    openModal(modal) {
      modal.classList.add('show');
    }

    closeModal(modal) {
      modal.classList.remove('show');
    }

    showToast(message, type = 'success') {
      this.el.toast.textContent = message;
      this.el.toast.classList.add('show');
      this.el.toast.style.borderColor = type === 'error' ? '#ef4444' : '#16a34a';
      setTimeout(() => {
        this.el.toast.classList.remove('show');
      }, 3000);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.financeApp = new FinanceApp();
  });
})();
