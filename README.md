# 🎨 Template de Portfólio Moderno (Versão Modular)

Um template de portfólio responsivo e moderno, com **arquitetura modular** para facilitar a manutenção e personalização!

## 🚀 Recursos

- ✨ Design moderno e minimalista
- 📱 Totalmente responsivo (mobile, tablet e desktop)
- 🎭 Animações suaves e interativas
- 🌙 Esquema de cores escuro elegante
- 📧 Formulário de contato
- 🔗 Links para redes sociais
- 💼 Seção de projetos com cards estilizados
- 🛠️ Seção de habilidades organizadas
- 📄 Seção "Sobre Mim"
- 🧩 **Arquitetura modular para fácil manutenção**

## 📁 Estrutura do Projeto (Modular)

```
new_portfolio/
│
├── index.html              # Arquivo principal (carrega todas as seções)
│
├── sections/               # 📂 Seções HTML separadas
│   ├── navbar.html        # Navegação
│   ├── hero.html          # Seção inicial/apresentação
│   ├── about.html         # Sobre mim
│   ├── projects.html      # Projetos
│   ├── skills.html        # Habilidades
│   ├── contact.html       # Contato
│   └── footer.html        # Rodapé
│
├── css/                    # 📂 Estilos CSS modulares
│   ├── global.css         # Estilos globais e reset
│   ├── navbar.css         # Estilos da navegação
│   ├── hero.css           # Estilos do hero
│   ├── about.css          # Estilos da seção sobre
│   ├── projects.css       # Estilos dos projetos
│   ├── skills.css         # Estilos das habilidades
│   ├── contact.css        # Estilos do contato
│   └── footer.css         # Estilos do rodapé
│
├── js/                     # 📂 JavaScript modular
│   ├── main.js            # Arquivo principal (inicializa módulos)
│   ├── navigation.js      # Navegação e menu
│   ├── animations.js      # Animações ao rolar
│   ├── contact.js         # Formulário de contato
│   └── utils.js           # Funções utilitárias
│
├── styles.css             # ⚠️ Arquivo legado (pode ser removido)
├── script.js              # ⚠️ Arquivo legado (pode ser removido)
└── README.md              # Este arquivo
```

## ✨ Vantagens da Arquitetura Modular

### **1. Manutenção Facilitada**
- Cada seção está em seu próprio arquivo
- Fácil localizar e editar conteúdo específico
- Mudanças isoladas não afetam outras seções

### **2. Organização**
- CSS separado por componente
- JavaScript dividido por funcionalidade
- Estrutura clara e intuitiva

### **3. Reutilização**
- Componentes podem ser facilmente copiados para outros projetos
- Módulos JavaScript podem ser importados independentemente

### **4. Colaboração**
- Múltiplos desenvolvedores podem trabalhar em seções diferentes
- Menos conflitos em controle de versão

### **5. Performance**
- Carregamento assíncrono de seções
- Possibilidade de lazy loading no futuro

## 🎯 Como Personalizar

### 📝 Editando Seções HTML

Cada seção está em um arquivo separado na pasta `sections/`:

#### **Navegação** (`sections/navbar.html`)
```html
<h2>SEU LOGO</h2>  <!-- Mude para seu logo ou nome -->
```

#### **Hero** (`sections/hero.html`)
- Linha 5: Altere `"Seu Nome"`
- Linha 7: Altere sua profissão/título
- Linha 8-10: Descreva o que você faz
- Linhas 14-26: Atualize links das redes sociais

#### **Sobre** (`sections/about.html`)
- Linha 6: Substitua a URL da imagem pela sua foto
- Linhas 9-15: Escreva sobre você
- Linhas 17-27: Atualize informações pessoais
- Linha 28: Adicione link do seu currículo

#### **Projetos** (`sections/projects.html`)
Para cada projeto, edite:
- Imagem: `<img src="SUA_IMAGEM.jpg">`
- Nome: `<h3>Nome do Projeto</h3>`
- Descrição: `<p>Descrição...</p>`
- Links: Atualize os `href` nos ícones
- Tags: `<span class="tag">Tecnologia</span>`

**Adicionar novo projeto:** Copie um bloco `<div class="project-card">` completo

#### **Habilidades** (`sections/skills.html`)
- Edite as categorias: Frontend, Backend, Ferramentas
- Adicione/remova habilidades
- Use ícones do [Font Awesome](https://fontawesome.com/icons)

#### **Contato** (`sections/contact.html`)
- Linhas 9-27: Atualize email, telefone e localização

#### **Footer** (`sections/footer.html`)
- Linha 4: Altere o ano e seu nome
- Linhas 5-16: Atualize links sociais

### 🎨 Editando Estilos CSS

Os estilos estão organizados por seção na pasta `css/`:

#### **Cores Globais** (`css/global.css`)
Linhas 8-18, edite as variáveis CSS:
```css
:root {
    --primary-color: #6366f1;      /* Cor primária */
    --secondary-color: #8b5cf6;    /* Cor secundária */
    --dark-bg: #0f172a;            /* Fundo principal */
    --text-primary: #f1f5f9;       /* Texto principal */
    --accent-color: #22d3ee;       /* Cor de destaque */
}
```

#### **Estilos Específicos**
- `navbar.css` - Estilos da barra de navegação
- `hero.css` - Estilos da seção inicial
- `about.css` - Estilos da seção sobre
- `projects.css` - Estilos dos cards de projeto
- `skills.css` - Estilos das habilidades
- `contact.css` - Estilos do formulário
- `footer.css` - Estilos do rodapé

**Vantagem:** Edite apenas o arquivo CSS da seção que deseja modificar!

### ⚙️ JavaScript Modular

Os módulos estão na pasta `js/`:

#### **`navigation.js`**
- Menu mobile toggle
- Navegação suave
- Link ativo ao rolar

#### **`animations.js`**
- Animações de entrada dos cards
- Efeitos ao rolar a página

#### **`contact.js`**
- Validação do formulário
- Envio de mensagem (adicione integração aqui)

#### **`utils.js`**
- Funções auxiliares
- Efeito de digitação
- Contador animado

#### **`main.js`**
Importa e inicializa todos os módulos. Não precisa editar geralmente.

## 🔧 Configuração do Formulário

O formulário em `sections/contact.html` precisa de integração backend. Edite `js/contact.js`:

### **Opção 1: Formspree**
```javascript
// Em contact.js, linha 8:
const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    body: JSON.stringify({ name, email, subject, message }),
    headers: { 'Content-Type': 'application/json' }
});
```

### **Opção 2: EmailJS**
Siga a documentação do [EmailJS](https://www.emailjs.com/) e atualize `contact.js`

## 🖼️ Adicionando Imagens

### **Estrutura Recomendada:**
```
new_portfolio/
├── img/
│   ├── perfil.jpg
│   ├── projeto1.jpg
│   ├── projeto2.jpg
│   └── ...
```

### **Como usar:**
Em `sections/about.html`:
```html
<img src="img/perfil.jpg" alt="Sua foto">
```

Em `sections/projects.html`:
```html
<img src="img/projeto1.jpg" alt="Projeto 1">
```

## 🌐 Como Visualizar

### **Método 1: Live Server (Recomendado)**
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### **Método 2: Python Server**
```powershell
python -m http.server 8000
```
Acesse: `http://localhost:8000`

### **Método 3: Node.js http-server**
```powershell
npx http-server -p 8000
```

⚠️ **Importante:** Não abra o `index.html` diretamente no navegador (duplo clique), pois o carregamento de seções via `fetch()` não funciona sem um servidor local.

## 🚀 Como Publicar

### **GitHub Pages**
1. Faça upload para um repositório GitHub
2. Settings → Pages → Selecione branch `main`
3. Seu site: `https://seuusuario.github.io/repositorio`

### **Netlify**
1. Arraste a pasta em [netlify.com](https://www.netlify.com/)
2. Deploy instantâneo!

### **Vercel**
1. Conecte seu repositório em [vercel.com](https://vercel.com/)
2. Deploy automático em cada push

## 🔄 Adicionando Novas Seções

### **1. Crie o arquivo HTML**
`sections/nova-secao.html`:
```html
<section id="nova-secao" class="nova-secao">
    <div class="container">
        <h2 class="section-title">Nova Seção</h2>
        <!-- Seu conteúdo -->
    </div>
</section>
```

### **2. Crie o arquivo CSS**
`css/nova-secao.css`:
```css
.nova-secao {
    /* Seus estilos */
}
```

### **3. Adicione ao index.html**
```html
<!-- No <head> -->
<link rel="stylesheet" href="css/nova-secao.css">

<!-- No <body> -->
<div id="nova-secao-container"></div>

<!-- No script -->
await loadSection('nova-secao-container', 'sections/nova-secao.html');
```

### **4. Adicione ao menu**
Em `sections/navbar.html`:
```html
<li><a href="#nova-secao" class="nav-link">Nova Seção</a></li>
```

## 📚 Arquivos Legados

Os arquivos `styles.css` e `script.js` são da versão anterior (não modular). Você pode:
- **Mantê-los** como backup
- **Removê-los** se tudo funcionar bem com a nova estrutura

## 🐛 Solução de Problemas

### **Seções não carregam**
- Verifique se está usando um servidor local (Live Server, http-server, etc.)
- Abra o Console do navegador (F12) para ver erros

### **Menu não funciona no mobile**
- Verifique se `js/main.js` está carregando corretamente
- Confirme que `js/navigation.js` está importado em `main.js`

### **Estilos não aplicados**
- Confirme que todos os arquivos CSS estão linkados no `index.html`
- Verifique se os caminhos dos arquivos estão corretos

### **JavaScript não funciona**
- Confirme que o navegador suporta ES6 modules
- Use `type="module"` no script tag (já configurado)

## 💡 Dicas de Manutenção

### **Editando uma seção específica:**
1. Abra o arquivo HTML da seção em `sections/`
2. Edite o conteúdo
3. Salve e recarregue o navegador

### **Mudando estilos de uma seção:**
1. Abra o arquivo CSS correspondente em `css/`
2. Faça as alterações
3. Salve e veja as mudanças

### **Adicionando funcionalidade:**
1. Crie um novo módulo em `js/`
2. Importe e inicialize em `js/main.js`

## 📄 Licença

Este template é livre para uso pessoal e comercial!

## 💬 Suporte

Alguma dúvida sobre a estrutura modular? Entre em contato!

## 🎯 Como Personalizar

### 1️⃣ Informações Pessoais (index.html)

#### **Seção Hero (Início)**
Localize a linha 27-42 e substitua:
- `"Seu Nome"` - Seu nome completo
- `"Desenvolvedor Full Stack | Designer UI/UX"` - Sua profissão/título
- A descrição com seu texto personalizado

#### **Links de Redes Sociais**
Localize as linhas 46-59 e atualize:
```html
<a href="https://github.com/SEUUSUARIO" target="_blank">
<a href="https://linkedin.com/in/SEUUSUARIO" target="_blank">
<a href="https://twitter.com/SEUUSUARIO" target="_blank">
<a href="mailto:SEUEMAIL@example.com">
```

### 2️⃣ Seção Sobre (index.html)

Localize as linhas 67-98:
- Substitua a URL da imagem (linha 71): `src="SUA_FOTO.jpg"`
- Edite o título e parágrafos com sua história
- Atualize as informações de localização, formação e disponibilidade
- Ajuste o link do currículo (linha 92): `href="seu-curriculo.pdf"`

### 3️⃣ Projetos (index.html)

Para cada projeto (linhas 108-222), atualize:
```html
<img src="IMAGEM_DO_PROJETO.jpg" alt="Nome do Projeto">
<h3>Nome do Projeto</h3>
<p>Descrição do seu projeto</p>
```

Atualize os links:
```html
<a href="URL_DO_PROJETO_LIVE" target="_blank">  <!-- Ver projeto online -->
<a href="URL_DO_REPOSITORIO" target="_blank">   <!-- Ver código no GitHub -->
```

Atualize as tags de tecnologia:
```html
<span class="tag">React</span>
<span class="tag">Node.js</span>
```

**💡 Dica:** Para adicionar mais projetos, copie o bloco completo de um `<div class="project-card">` e cole abaixo.

### 4️⃣ Habilidades (index.html)

Localize as linhas 232-316 e personalize:

**Frontend (linhas 240-260):**
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

**Backend (linhas 265-285):**
```html
<div class="skill-item">
    <i class="fab fa-node"></i>
    <span>Node.js</span>
</div>
```

**Ferramentas (linhas 290-310):**
```html
<div class="skill-item">
    <i class="fab fa-git-alt"></i>
    <span>Git</span>
</div>
```

**💡 Ícones:** Use [Font Awesome](https://fontawesome.com/icons) para encontrar ícones de tecnologias.

### 5️⃣ Contato (index.html)

Localize as linhas 327-345 e atualize:
```html
<p>seuemail@example.com</p>
<p>+55 (11) 99999-9999</p>
<p>Sua Cidade, Brasil</p>
```

### 6️⃣ Cores e Estilo (styles.css)

Para mudar o esquema de cores, edite as variáveis no início do arquivo `styles.css` (linhas 9-18):

```css
:root {
    --primary-color: #6366f1;      /* Cor primária (botões, links) */
    --secondary-color: #8b5cf6;    /* Cor secundária */
    --dark-bg: #0f172a;            /* Fundo principal */
    --darker-bg: #0a0e1a;          /* Fundo mais escuro */
    --light-bg: #1e293b;           /* Fundo de cards */
    --text-primary: #f1f5f9;       /* Texto principal */
    --text-secondary: #94a3b8;     /* Texto secundário */
    --accent-color: #22d3ee;       /* Cor de destaque */
}
```

**💡 Sugestões de paletas:**
- **Azul/Roxo:** `#6366f1`, `#8b5cf6`, `#22d3ee`
- **Verde/Esmeralda:** `#10b981`, `#059669`, `#34d399`
- **Laranja/Vermelho:** `#f97316`, `#ef4444`, `#fb923c`

### 7️⃣ Logo e Navegação

No arquivo `index.html`, linha 15:
```html
<h2>SEU LOGO</h2>
```

Você pode substituir por:
- Seu nome
- Iniciais
- Uma imagem: `<img src="logo.png" alt="Logo">`

## 📝 Formulário de Contato

O formulário atualmente exibe um alerta. Para torná-lo funcional:

### **Opção 1: Formspree (Grátis)**
1. Acesse [formspree.io](https://formspree.io/)
2. Crie uma conta e obtenha um endpoint
3. Em `index.html`, linha 347, adicione:
```html
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

### **Opção 2: EmailJS**
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Siga o tutorial de integração
3. Atualize o código em `script.js` (linha 83)

### **Opção 3: Seu próprio backend**
Configure sua API e atualize o JavaScript para fazer uma requisição para seu servidor.

## 🖼️ Imagens

### **Foto de Perfil**
Substitua `https://via.placeholder.com/400x400` (linha 71) por:
- Caminho local: `img/perfil.jpg`
- URL externa: `https://seu-site.com/foto.jpg`

### **Imagens de Projetos**
Substitua `https://via.placeholder.com/600x400` por suas capturas de tela:
- Salve as imagens na pasta `img/`
- Use: `img/projeto1.jpg`, `img/projeto2.jpg`, etc.

**💡 Dica:** Use dimensões consistentes (ex: 600x400px) para melhor visual.

## 🌐 Como Visualizar

### **Método 1: Abrir diretamente**
Clique duas vezes no arquivo `index.html`

### **Método 2: Live Server (Recomendado)**
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### **Método 3: Python Server**
```bash
python -m http.server 8000
```
Acesse: `http://localhost:8000`

## 🚀 Como Publicar

### **GitHub Pages (Grátis)**
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione a branch `main` e salve
5. Seu site estará em: `https://seuusuario.github.io/repositorio`

### **Netlify (Grátis)**
1. Acesse [netlify.com](https://www.netlify.com/)
2. Arraste a pasta do projeto
3. Seu site estará online em segundos!

### **Vercel (Grátis)**
1. Acesse [vercel.com](https://vercel.com/)
2. Conecte seu repositório GitHub
3. Deploy automático!

## 🎨 Personalizações Avançadas

### **Adicionar modo claro/escuro**
Adicione um botão toggle e variáveis CSS alternativas

### **Adicionar animações personalizadas**
Explore a biblioteca [AOS](https://michalsnik.github.io/aos/) ou [GSAP](https://greensock.com/gsap/)

### **Adicionar blog**
Crie uma nova seção ou integre com um CMS como Contentful

### **Adicionar análises**
Integre Google Analytics ou Plausible

## 📱 Compatibilidade

✅ Chrome, Firefox, Safari, Edge (versões recentes)
✅ Dispositivos móveis (iOS e Android)
✅ Tablets

## 🐛 Problemas Comuns

**Menu não abre no mobile:**
- Verifique se o `script.js` está carregando corretamente

**Imagens não aparecem:**
- Verifique o caminho das imagens
- Use caminhos relativos ou URLs completas

**Formulário não envia:**
- Configure um serviço de backend como descrito acima

## 📄 Licença

Este template é livre para uso pessoal e comercial. Sinta-se à vontade para modificar!

## 💬 Suporte

Alguma dúvida? Deixe seu feedback ou entre em contato!

---

**Feito com ❤️ para desenvolvedores que querem um portfólio incrível!**

🌟 Não esqueça de dar uma estrela se você gostou deste template!
