$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://sga.unemi.edu.ec/api?a=apiarticulos",
        success:function(datos){
            for( e in datos){
                nombre = datos[e]["nombre"]
                revista = datos[e]["revista"]
                anio = datos[e]["anio"]
                doi = datos[e]["doi"]
                linea = "<tr> <td>"+nombre+"</td>  <td>"+revista+"</td> <td>"+anio+"</td> <td>"+doi+"</td> </tr>"
                $(linea).appendTo("#datatable tbody")
                }
                $("#dataTable").DataTable()
        }
    });
});