<?php
// Diretório para salvar os uploads
$diretorio = "uploads/";

// Caminho completo do arquivo
$caminho_arquivo = $diretorio . basename($_FILES["arquivo"]["name"]);

// Verifica o tipo do arquivo
$tipo_arquivo = pathinfo($caminho_arquivo, PATHINFO_EXTENSION);

// Verifica se o arquivo é uma imagem ou vídeo (adapte conforme sua necessidade)
if($tipo_arquivo == "jpg" || $tipo_arquivo == "png" || $tipo_arquivo == "jpeg" || $tipo_arquivo == "mp4" || $tipo_arquivo == "mov") {
    // Move o arquivo para o diretório de uploads
    if(move_uploaded_file($_FILES["arquivo"]["tmp_name"], $caminho_arquivo)) {
        echo "Upload bem-sucedido.";
    } else {
        echo "Erro ao fazer o upload do arquivo.";
    }
} else {
    echo "Somente são permitidos arquivos de imagem (jpg, png, jpeg) ou vídeo (mp4, mov).";
}
?>
