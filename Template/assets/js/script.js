var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "htmlmixed", // Mode kode (misalnya, HTML, JavaScript, dsb.)
    theme: "darcula", // Theme (opsional)
    lineNumbers: true,  // Menampilkan nomor baris
});