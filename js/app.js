// UNYA - Aplicação principal

const UNYA = {
  nome: "UNYA",
  slogan: "Conectados por um propósito",

  usuario: null,
  publicacoes: [],
  comunidades: [],
  eventos: [],

  criarPublicacao(texto) {
    if (!texto.trim()) return;

    const publicacao = {
      id: Date.now(),
      autor: this.usuario?.nome || "Visitante",
      texto: texto.trim(),
      curtidas: [],
      comentarios: [],
      data: new Date().toISOString()
    };

    this.publicacoes.unshift(publicacao);
    return publicacao;
  },

  curtirPublicacao(id, usuarioId) {
    const post = this.publicacoes.find(p => p.id === id);
    if (!post) return;

    if (post.curtidas.includes(usuarioId)) {
      post.curtidas = post.curtidas.filter(id => id !== usuarioId);
    } else {
      post.curtidas.push(usuarioId);
    }
  },

  comentarPublicacao(id, texto) {
    const post = this.publicacoes.find(p => p.id === id);
    if (!post || !texto.trim()) return;

    post.comentarios.push({
      texto: texto.trim(),
      autor: this.usuario?.nome || "Visitante",
      data: new Date().toISOString()
    });
  }
};

console.log("UNYA inicializada!");
