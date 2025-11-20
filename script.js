//Faz os card aparecerem suavemente ao rolar
window.addEventListener("scroll",()=>{
    const cards=document.querySelectorAll(";card");
    cards.forEach(card=>{
        const pos=card.getBoundingClientReact().top;
        const windowHeight=window.innerHeight;
        if(pos<windowHeight -50){
            card.computedStyleMap.opacity=1;
            card.style.transform="translateY(0)";
            card.style.transition="all 0.6s ease";
        }
    });
});

//Função para abrir o whatsApp com pedido
function fazerPedido(produto){
    const numero= "999773883";//número de WhatsApp
    const mensagem='Olá! Gostaria de pedir um $ {produto} da Doce Affeto 🍮';
    const link= 'https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}';
    window.open(link,"_blank");
}