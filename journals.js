$(document).ready(function() {

        $.ajax({
            type:"GET",
            url:"https://sga.unemi.edu.ec/api?a=apirevistas",
            success:function(datos){
                for( e in datos){
                Name = datos[e]["nombre"]
                tipo = datos[e]["tipo"]
                codigoissn = datos[e]["codigoissn"]
                enlace = datos[e]["enlace"]
                linea = "<tr> <td>"+Name+"</td> <td>"+tipo+"</td> <td>"+codigoissn+"</td> <td>"+enlace+"</td> </tr>"
                $(linea).appendTo("#dataTable tbody")
                }
                $("#dataTable").DataTable()
            }
        });
});
