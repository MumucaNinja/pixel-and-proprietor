# WebLocal — Sites para comércios locais

Site-base (template) para criação de sites profissionais para comércios locais. Projeto demo gerado com Vite + React + TypeScript, utilizando UI primitives (Radix / shadcn-ui) e Tailwind CSS.

Demo/Origem: https://lovable.dev/projects/c7109833-57df-4fed-8170-eff21c4edf69

## Visão geral

- Propósito: landing page / site institucional para pequenos comércios que precisam de presença online rápida e profissional.
- Público-alvo: desenvolvedores que customizam o template e proprietários que contratam a criação do site.

## Tecnologias

- Vite (bundler / dev server)
- React + TypeScript
- Tailwind CSS + tailwind-merge
- shadcn-ui / Radix primitives (componentes UI)
- react-router-dom (navegação básica)
- @tanstack/react-query (cache/requests)
- sonner (toasts)

## Estrutura importante do projeto

- `src/` — código-fonte React
	- `App.tsx` — root do app, providers (QueryClient, router, tooltips, toasters)
	- `main.tsx` — bootstrap da app
	- `pages/Index.tsx` — página principal que monta seções (Header, Hero, Benefits, Gallery, About, Pricing, ContactForm, Footer)
	- `components/` — componentes da landing (Header, Hero, Footer, etc.)
	- `components/ui/` — primitives e wrappers UI reutilizáveis (shadcn)
	- `lib/utils.ts` — helpers (ex: `cn` - classe utilitária)

## Alias de import

O projeto usa alias `@` apontando para `src/`. Ex.: `import Header from "@/components/Header"`.

Configurações:
- `tsconfig.json` -> `"@/*": ["./src/*"]`
- `vite.config.ts` -> alias `@` para `src`

## Como rodar (PowerShell / Windows)

Pré-requisitos: Node.js (versão compatível), npm.

No PowerShell:

```powershell
npm i
npm run dev
```

Principais scripts (via `package.json`):

- `dev` — inicia servidor de desenvolvimento (Vite)
- `build` — build de produção
- `preview` — visualiza build localmente
- `lint` — executa ESLint

## Boas práticas e dicas para desenvolvimento

- Use o alias `@` para evitar caminhos relativos longos.
- Componentes UI estão em `components/ui/` (base para consistência visual). Siga o padrão desses componentes ao criar novos.
- A maioria dos hooks e utilitários fica em `src/hooks` e `src/lib`.

## Sugestões rápidas (próximos passos)

- Adicionar testes unitários/integração (Jest/Testing Library) para componentes críticos.
- Configurar CI com lint + build para evitar regressões.
- Melhorar SEO (meta tags dinâmicas, Open Graph) e adicionar markup semântico onde fizer sentido.
- Verificar contraste/ACessibilidade (aria labels, roles, keyboard navigation) — header e botões já tem boa base, revisar formulários.
- Adicionar validação e feedback no `ContactForm` (já existe react-hook-form nas dependências).

## Contribuição

- Faça um fork / branch e abra PR. Mantenha código formatado e com lint verde.

## Licença

Coloque aqui a licença do projeto (ex: MIT) se aplicável.

---

Se quiser, eu posso também:

- gerar um arquivo `CONTRIBUTING.md` com instruções de trabalho e padrões de commit;
- adicionar um script de preview mais amigável para Windows;
- criar testes básicos para `Header` e `Hero`.

Abaixo, envio um breve feedback de leitura do código e sugestões — veja seção "Feedback".
