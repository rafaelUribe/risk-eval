const mes_1_saldo_input = document.getElementById('mes-1-saldo')
const mes_1_depositos_input = document.getElementById('mes-1-depositos')
const mes_1_retiros_input = document.getElementById('mes-1-retiros')

const mes_2_saldo_input = document.getElementById('mes-2-saldo')
const mes_2_depositos_input = document.getElementById('mes-2-depositos')
const mes_2_retiros_input = document.getElementById('mes-2-retiros')

const mes_3_saldo_input = document.getElementById('mes-3-saldo')
const mes_3_depositos_input = document.getElementById('mes-3-depositos')
const mes_3_retiros_input = document.getElementById('mes-3-retiros')

const tri_saldos_input = document.getElementById('tri-saldos')
const tri_depositos_input = document.getElementById('tri-depositos')
const tri_retiros_input = document.getElementById('tri-retiros')

const deuda_total_buro_input = document.getElementById('deuda-total')
const pago_mensual_buro_input = document.getElementById('pago-mensual')

const saldos_pago_input = document.getElementById('saldos-pago-buro')
const saldos_pago_renta_input = document.getElementById('saldos-pago-buro-renta')

const update = e => {
    if(!e.target.value){
        e.target.value = 0
    }

    tri_saldos_input.value = parseFloat(mes_1_saldo_input.value) + parseFloat(mes_2_saldo_input.value) + parseFloat(mes_3_saldo_input.value)

    tri_depositos_input.value = parseFloat(mes_1_depositos_input.value) + parseFloat(mes_2_depositos_input.value) + parseFloat(mes_3_depositos_input.value)

    tri_retiros_input.value = parseFloat(mes_1_retiros_input.value) + parseFloat(mes_2_retiros_input.value) + parseFloat(mes_3_retiros_input.value)

    saldos_pago_input.value = parseFloat(tri_saldos_input.value) - parseFloat(pago_mensual_buro_input.value)
}

mes_1_saldo_input.addEventListener('change', update)
mes_1_depositos_input.addEventListener('change', update)
mes_1_retiros_input.addEventListener('change', update)

mes_2_saldo_input.addEventListener('change', update)
mes_2_depositos_input.addEventListener('change', update)
mes_2_retiros_input.addEventListener('change', update)

mes_3_saldo_input.addEventListener('change', update)
mes_3_depositos_input.addEventListener('change', update)
mes_3_retiros_input.addEventListener('change', update)

tri_saldos_input.addEventListener('change', update)
tri_depositos_input.addEventListener('change', update)
tri_retiros_input.addEventListener('change', update)

deuda_total_buro_input.addEventListener('change', update)
pago_mensual_buro_input.addEventListener('change', update)

saldos_pago_input.addEventListener('change', update)
saldos_pago_renta_input.addEventListener('change', update)