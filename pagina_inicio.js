// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Pega todos os links da página
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(evento) {
            
            // Verifica se é um link para outra página do seu site
            // (Ignora links externos e links de âncora que rolam a página para baixo)
            if (this.hostname === window.location.hostname && !this.hash && this.target !== "_blank") {
                
                // 1. Impede a mudança imediata de página
                evento.preventDefault(); 
                
                // 2. Pega para qual URL o link quer ir
                const destino = this.href; 
                
                // 3. Adiciona a classe que faz a página desaparecer suavemente
                document.body.classList.add("saindo"); 
                
                // 4. Espera 500ms (o tempo da animação CSS) e então muda de página
                setTimeout(() => {
                    window.location.href = destino;
                }, 500);
            }
        });
    });
});