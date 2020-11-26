export class FormatDate {

    // Função de formatar data e hora
    format(x) {
        let data = new Date(x);
        let dataFormatada = ((data.getDate())) +
            "/" + ((data.getMonth() + 1)) + "/" +
            data.getFullYear() + " - " + data.getHours() +
            ":" + data.getMinutes();
        return dataFormatada
    }
}