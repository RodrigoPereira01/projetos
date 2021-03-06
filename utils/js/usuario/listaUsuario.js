$(function () {
     $( ".alterar_usuario" ).click(function() {
         var usuario = $(this).attr("accesskey");

         location.href = "../view/cadastroUsuario.php?codigo="+ usuario;

         


 
    });

    $( ".excluir_usuario" ).click(function() {

        Swal.fire({
            title: 'Atenção!',
            html: 'Você deseja realmente excluir o usuário? Ao prosseguir com a operação, não será possível recuperar esses dados.',
            icon: 'warning',
            showCloseButton: true,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `<i class="fa fa-minus-circle" style="margin-right: 10px; margin-left: -5px;"></i> Sim, excluir!`,
            cancelButtonText: `<i class="fa fa-minus-circle" style="margin-right: 10px; margin-left: -5px;"></i> Não!`,
            confirmButtonColor: '#f62d51',
        }).then((result) => {
            if(result.value){
                var usuario = $(this).attr("accesskey");
        

                var formData = new FormData();

                formData.append('usuario', usuario);

                var route = `../controller/deletaUsuario.php`;

                ajax_submit_form(formData, route).then((response) => {
                    console.log("response", response);
                    if (response) {
                        Swal.fire({
                            title: 'Usuário Excluído com sucesso!',
                            icon: 'success',
                            showCloseButton: false,
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            onBeforeOpen: () => {
                                Swal.showLoading()
                            }
                        }).then((result) => {
                                    
                            location.href = "../view/ListaUsuarios.php";
                        });
                    } else {
                        Swal.fire({
                            title: `Ocorreu algum erro ao excluir usuário! Contate o suporte!`,
                            icon: 'info',
                            timer: 3000,
                            timerProgressBar: true,
                            onBeforeOpen: () => {
                            Swal.showLoading()
                            }
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    Swal.fire({
                        title: 'Ocorreu algum erro ao excluir usuário! Contate o suporte!',
                        icon: 'error',
                        timer: 3000,
                        timerProgressBar: true,
                        onBeforeOpen: () => {
                        Swal.showLoading()
                        }
                    });
                });
            }
        });

        
    });

});