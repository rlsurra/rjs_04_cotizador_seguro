export function obtenerDiferenciaAnio(anio) {
    return new Date().getFullYear() - anio;
}

export function obtenerPorcentajeMarca(marca) {
    let p;
    
    switch(marca){
        case 'europeo':
            p = 0.3;
            /* falls through */
        case 'asiatico':
            p = 0.05;
            /* falls through */
        case 'americano':
            p = 0.15;
            /* falls through */
        default:
            break;
    }
    return p;
}

export function obtenerPorcentajePlan(plan) {
    let p;
    if(plan === 'basico'){
        p = 0.2
    }
    else {
        p = 0.5
    }
    return p;
}

export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}