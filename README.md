# Igreja Presbiteriana do Paranoá (IP Paranoá) - Site Institucional

Este é o site oficial da **Igreja Presbiteriana do Paranoá**, desenvolvido com uma arquitetura moderna, rápida e orientada a dados. O objetivo principal deste projeto é permitir que a igreja mantenha suas informações (cultos, eventos, notícias, liderança) atualizadas de forma simples, alterando apenas um arquivo central de configuração.

## 🚀 Tecnologias Utilizadas

- **Vite**: Bundler de última geração para um desenvolvimento ultra-rápido.
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e moderno.
- **JavaScript Moderno (ES6+)**: Lógica desacoplada e modular.
- **Material Symbols & Font Awesome**: Iconografia profissional e reconhecível.
- **Bible API**: Integração externa para o Versículo do Dia.

## 📂 Estrutura do Projeto

```text
├── index.html              # Página Inicial
├── pages/                  # Demais páginas (Quem Somos, Agenda, etc.)
├── src/
│   ├── main.js             # Ponto de entrada e roteamento
│   ├── components/         # Componentes globais (Header, Footer)
│   ├── data/
│   │   └── churchData.js   # ⬅️ ARQUIVO CENTRAL DE DADOS
│   ├── pages/              # Lógica específica de cada tela
│   ├── styles/             # Configurações de design e Tailwind
│   └── assets/             # Imagens, Documentos e Banners
└── vite.config.js          # Configuração de build para múltiplas páginas
```

## ⚙️ Como Executar

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação
```bash
npm install
```

### Desenvolvimento
Inicia o servidor local com hot-reload:
```bash
npm run dev
```

### Build (Produção)
Gera os arquivos otimizados na pasta `dist/` para hospedagem:
```bash
npm run build
```

## 📝 Como Atualizar o Conteúdo

Você **não precisa editar arquivos HTML** para mudar a maioria das informações. Tudo está centralizado no arquivo:
`src/data/churchData.js`

Neste arquivo, você pode alterar:
- **Contatos**: Endereço, telefone, links de mapas.
- **Horários**: Cultos semanais e horários de secretaria.
- **Notícias**: Títulos, descrições e categorias dos avisos da igreja.
- **Agenda**: Eventos futuros (formato: "DIA MÊS", ex: "12 MAI").
- **Liderança**: Nomes, cargos e bios dos oficiais.
- **Documentos**: Links para PDFs da Confissão de Fé e Manual.

## 🎨 Design System

O projeto utiliza um sistema de cores baseado no **Material Design** com foco no "Forest Green" (Verde Floresta), harmonizando com a identidade da IPB.

- **Primária**: Verde Escuro (Seriedade e Identidade)
- **Secundária**: Tons de Verde Oliva e Dourado (Acolhimento)
- **Tipografia**: Noto Serif (Títulos/Doutrina) e Manrope (Corpo/Modernidade)

---
*Desenvolvido com carinho para a IP Paranoá.*
