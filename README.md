# 🌿 EcoarEnergy Dashboard

**Sistema de Gestão e Monitoramento de Consumo de Energia em Tempo Real**

Um dashboard completo e inteligente desenvolvido com React + Vite + Tailwind CSS para monitorar consumo de energia, economias, dispositivos conectados e metas de consumo com análises detalhadas e controle centralizado.

---

## 📋 Visão Geral

O EcoarEnergy Dashboard é uma plataforma robusta de gestão energética que permite:

- 📊 **Monitoramento em Tempo Real**: Acompanhe consumo de energia com gráficos interativos
- 💚 **Análise de Economia**: Compare consumo com e sem sistema para medir eficiência
- 🎯 **Gestão de Metas**: Defina e acompanhe metas de consumo e tempo de atuação de dispositivos
- 🏛️ **Múltiplas Unidades**: Suporte para monitoramento de múltiplas estabelecimentos
- 📈 **Análises Comparativas**: Comparações com períodos anteriores (dia/mês)
- 🔐 **Autenticação**: Sistema seguro de login com dados persistidos localmente
- 📱 **Interface Responsiva**: Design otimizado para desktop, tablet e mobile

---

## 🎯 Funcionalidades Principais

### 1. **Autenticação e Segurança**
- Sistema de login com e-mail e senha
- Armazenamento seguro de sessão em localStorage
- Logout com limpeza de dados sensíveis
- Persistência de autenticação entre sessões

### 2. **Dashboard Principal (FinancialDashboard)**

#### 📊 Gráficos Interativos
- **Gráfico Mensal/Diário**: Comparação de consumo com sistema vs. sem sistema
- **Gráfico de Linha com Meta**: Visualização de meta versus consumo realizado
- **Gauge de Economia**: Indicador visual (0-100%) da taxa de economia alcançada
- **Gráfico de Pizza**: Distribuição do consumo com/sem sistema

#### 💰 Métricas Financeiras
- **Meta de Consumo**: Definição e edição de meta de custo para o período selecionado
- **Consumo Total**: Soma completa do consumo para o período
- **Consumo Total do Mês**: Consumo específico do mês selecionado
- **Economia Total**: Cálculo automático da economia (consumo sem sistema - consumo com sistema)
- **Taxa de Economia**: Percentual de economia alcançada

#### 📈 Comparações Temporais
- **Redução vs. Período Anterior**: Card destacado mostrando % de redução/aumento comparado ao período anterior
- **Comparação com Dia/Mês Anterior**: Análise automática de tendências

#### 🔄 Filtros Dinâmicos
- **Visualização Mensal/Diária**: Alterne entre visualizações
- **Seleção de Período**: Escolha mês ou dia específico para análise
- **Dados em Tempo Real**: Integração com API para dados atualizados

#### ⏱️ Tempo de Atuação
- **Meta de Horas Mensais**: Defina quantas horas o sistema deve funcionar por mês
- **Atuação por Dispositivo**: Rastreie tempo de ativação individual de cada dispositivo
- **Histórico de Atuação**: Visualize dados históricos de funcionamento

#### 📋 Tabela de Metas
- Visualização de meses/dias com suas metas e atualizações
- Paginação automática (4 itens por página)
- Navegação entre períodos

### 3. **Aba de Consumo (ConsumptionTab)**
- Gráficos de consumo mensal com histórico de 12 meses
- Definição de metas de consumo customizadas
- Análise de economia versus objetivo
- Comparativo de economias entre períodos
- Visualização de tendências de consumo

### 4. **Central de Controle (ControlCenter)**
- Gestão centralizada de metas de tempo de execução por dispositivo
- Status visual de dispositivos (verde/amarelo/vermelho)
- Indicadores de saúde do sistema
- Alertas para dispositivos com desempenho fora da meta
- Edição rápida de metas de execução

### 5. **Detalhamento de Dispositivos (DeviceDetailView)**
- Visualização individual de cada dispositivo
- Histórico completo de consumo
- Métricas específicas por dispositivo
- Opção de retorno ao dashboard
- Análise detalhada de performance

### 6. **Seleção de Unidades e Dispositivos**
- **Header com Seleção de Estabelecimento**: Escolha entre múltiplas unidades
- **Seleção de Dispositivo**: Filtre dados por dispositivo específico
- **Visualização de Todos os Dispositivos**: Agregue dados de múltiplos dispositivos
- **Sincronização Automática**: Dados atualizam ao mudar estabelecimento ou dispositivo

### 7. **Design e Interface**
- **Sidebar de Navegação**: Menu fixo com acesso a todas as seções
- **Header Responsivo**: Controles de seleção e perfil do usuário
- **Cards Interativos**: Componentes com efeitos hover e transições suaves
- **Gradientes e Cores**: Paleta profissional com verde como cor principal
- **Notificações**: Sistema visual de alertas e aviso de dados mock
- **Loading States**: Indicadores de carregamento para operações assíncronas

---

## 🏗️ Arquitetura e Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                              # Componentes shadcn/ui (45+ componentes)
│   │   ├── accordion.jsx
│   │   ├── alert.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── dropdown-menu.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── select.jsx
│   │   ├── tabs.jsx
│   │   ├── tooltip.jsx
│   │   └── ... (35+ mais componentes)
│   │
│   ├── ActionBanner.jsx                 # Banner com call-to-action
│   ├── AllDevices.jsx                   # Visualização de todos os dispositivos
│   ├─��� ConsumptionTab.jsx               # Aba de consumo e metas
│   ├── ControlCenter.jsx                # Central de controle de dispositivos
│   ├── DashboardCharts.jsx              # Componentes de gráficos
│   ├── DeviceDetailView.jsx             # Detalhamento de dispositivo individual
│   ├── DeviceList.jsx                   # Lista de dispositivos
│   ├── DeviceRankings.jsx               # Ranking de dispositivos por performance
│   ├── EnergyStatistics.jsx             # Estatísticas gerais de energia
│   ├── FinancialDashboard.jsx           # Dashboard principal (1000+ linhas)
│   ├── Header.jsx                       # Cabeçalho com controles
│   ├── Login.jsx                        # Tela de autenticação
│   ├── MetricCard.jsx                   # Card reutilizável de métricas
│   ├── NextMonitoring.jsx               # Card de próximo monitoramento
│   └── Sidebar.jsx                      # Menu de navegação lateral
│
├── context/
│   ├── ApiDataContext.jsx               # Context para gerenciar dados da API
│   └── AuthContext.jsx                  # Context para autenticação (estrutura)
│
├── data/
│   ├── devices.js                       # Catálogo de dispositivos
│   ├── establishments.js                # Dados de estabelecimentos
│   └── mockData.js                      # Dados mockados para fallback
│
├── hooks/
│   ├── use-mobile.js                    # Hook para detecção de mobile
│   ├── useApiData.js                    # Hook para buscar dados da API
│   └── useChartData.js                  # Hook para processar dados de gráficos
│
├── lib/
│   ├── calculationUtils.js              # Utilitários de cálculo de métricas
│   ├── database.js                      # Funções de persistência de dados
│   └── utils.js                         # Utilitários gerais (cn, clsx, etc)
│
├── App.jsx                              # Componente raiz
├── App.css                              # Estilos globais
├── main.jsx                             # Entry point
└── index.html
```

---

## 🔧 Tecnologias e Dependências

### Core Framework
- **React 18.3.1**: Framework JavaScript para UI
- **Vite 6.4.1**: Build tool ultrarrápido
- **React Router DOM 7.6.1**: Roteamento de páginas

### UI & Styling
- **Tailwind CSS 4.1.7**: Utility-first CSS framework
- **shadcn/ui**: 45+ componentes UI prontos para produção
- **Lucide React 0.510.0**: Ícones SVG modernos
- **Framer Motion 12.15.0**: Animações suaves
- **Class Variance Authority 0.7.1**: Sistema de variantes de classes
- **CLSX 2.1.1**: Merge condicional de classes CSS

### Gráficos e Dados
- **ECharts 6.0.0**: Biblioteca avançada de gráficos
- **Echarts-for-React 3.0.5**: Integração React com ECharts
- **React Gauge Chart 0.5.1**: Componente de gauge/indicador
- **Recharts 2.15.3**: Gráficos compostos (alternativo)
- **Chart.js 4.4.0**: Biblioteca de gráficos
- **React-ChartJS-2 5.2.0**: Integração React com Chart.js

### Formulários e Validação
- **React Hook Form 7.56.3**: Gerenciamento de formulários
- **@hookform/resolvers 5.0.1**: Resolvedores de validação
- **Zod 3.24.4**: Validação de schema em TypeScript

### Utilitários
- **date-fns 3.6.0**: Manipulação de datas
- **Sonner 2.0.3**: Toast notifications
- **next-themes 0.4.6**: Gerenciamento de temas
- **Radix UI**: Primitivos acessíveis de UI (50+ packages)

### Dev Tools
- **ESLint 9.25.0**: Linting de código
- **Vite Plugin React 4.4.1**: Suporte JSX rápido

---

## 🚀 Deploy no GitHub Pages (branch `gh-pages`)

Use este passo a passo para publicar o projeto em **https://metiieus.github.io/Ecoar/** sem misturar arquivos de build com o código-fonte.

### 1) Instalar a dependência

```bash
npm install --save-dev gh-pages
```

### 2) Configurações necessárias (já aplicadas)

- `vite.config.js`: `base: '/Ecoar/'` para que os assets sejam resolvidos a partir do caminho do repositório.
- `package.json`: `homepage` apontando para `https://metiieus.github.io/Ecoar/`.
- `.gitignore`: inclui `dist/` para manter o build fora da branch `main`.

### 3) Scripts de deploy via `gh-pages`

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

O `predeploy` garante que o build mais recente esteja em `dist/` antes da publicação. O comando `deploy` publica a pasta `dist/` na branch **gh-pages**.

### 4) Fluxo para publicar

1. Confirme que está na branch `main` e com código atualizado: `git checkout main && git pull`.
2. Instale dependências (se necessário): `npm install`.
3. Execute o deploy: `npm run deploy`.
4. O pacote `gh-pages` criará (ou atualizará) a branch `gh-pages` com o conteúdo de `dist/` e fará o push automático.

### 5) Ativar o GitHub Pages

No repositório **Ecoar** no GitHub:

1. Acesse **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch **gh-pages** e o diretório **/(root)**.
4. Salve. A URL publicada será `https://metiieus.github.io/Ecoar/`.

> Sempre mantenha o desenvolvimento na branch `main` e use apenas a `gh-pages` para o conteúdo gerado. Como `dist/` está no `.gitignore`, nada do build será commitado junto ao código-fonte.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm 10.4.1+ ou yarn/pnpm equivalente

### Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install
# ou
pnpm install

# Executar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

### Build para Produção

```bash
# Gerar arquivos otimizados
npm run build

# Visualizar build localmente
npm run preview

# Deploy no GitHub Pages
npm run deploy
```

### Linting

```bash
# Verificar qualidade do código
npm run lint
```

---

## 📊 Integração com API

### Endpoints e Dados

O sistema se conecta a uma API AWS Lambda que fornece dados de consumo:

```
API Base: https://tb8calt97j.execute-api.sa-east-1.amazonaws.com/dev/dados
```

**Parâmetros:**
- `device_id`: ID do dispositivo (ex: 33)
- `historico`: Boolean para incluir histórico (true/false)

**Response esperado:**
```json
{
  "consumo_mensal": [0.0, 0.0, 563.28, ...],           // Array de 12 meses
  "consumo_diario_mes_corrente": [52.85, 49.92, ...], // Array de 31 dias
  "consumo_sem_sistema_mensal": [0.0, 0.0, ...],      // Consumo sem automação
  "consumo_sem_sistema_diario": [39.01, 38.6, ...],   // Consumo diário sem sistema
  "minutos_desligado_mensal": [0, 0, ...],            // Minutos offline por mês
  "minutos_desligado_diario": [189, 187, ...]         // Minutos offline por dia
}
```

### Fallback de Dados

Se a API não estiver disponível, o sistema usa **dados mockados** automaticamente, permitindo desenvolvimento offline e testes.

---

## 💾 Persistência de Dados

### LocalStorage
O sistema armazena dados no navegador para:

- **Autenticação**: `isAuthenticated`, `userEmail`
- **Metas de Consumo**: Por dispositivo, período e tipo de filtro
- **Metas de Tempo de Atuação**: Horas de funcionamento esperadas
- **Preferências de Usuário**: Dispositivo selecionado, filtro ativo

### Formato de Armazenamento
```javascript
// Meta de consumo
localStorage.setItem('meta_33_monthly_0', '10000')

// Meta de tempo de atuação
localStorage.setItem('timeMeta_33_monthly_0', '24')

// Autenticação
localStorage.setItem('isAuthenticated', 'true')
localStorage.setItem('userEmail', 'user@example.com')
```

---

## 🎨 Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| Verde Principal | `#10b981` | Barras do gráfico, badges de sucesso |
| Verde Claro | `#A3B18A` | Textos e destaques secundários |
| Verde Escuro | `#1F4532` | Backgrounds e textos principais |
| Bege | `#F0EAD2` | Backgrounds de cards secundários |
| Bege Escuro | `#D4CFC0` e `#E8DCC8` | Bordas e separadores |
| Vermelho | `#ef4444` e `#dc2626` | Alertas, consumo sem sistema |
| Azul | `#3b82f6` | Informações secundárias |
| Amarelo | `#f59e0b` | Meta (linha tracejada no gráfico) |
| Cinza | `#6b7280`, `#9ca3af` | Textos secundários |

---

## 📈 Métricas e Cálculos

### Economia
```javascript
Economia = Consumo sem Sistema - Consumo com Sistema
```

### Taxa de Economia
```javascript
Taxa (%) = (Economia Total / Consumo Total) * 100
```

### Comparação com Período Anterior
```javascript
% Mudança = ((Consumo Anterior - Consumo Atual) / Consumo Anterior) * 100
// Positivo = redução, Negativo = aumento
```

### Horas de Atuação
```javascript
Horas = Minutos de Funcionamento / 60
```

---

## 🔐 Autenticação

### Fluxo de Login
1. Usuário acessa o app
2. Se não autenticado, exibe tela de Login
3. Credenciais são armazenadas em localStorage
4. Sessão persiste ao recarregar página
5. Logout limpa dados sensíveis

### Credenciais de Teste
```
Email: usuario@test.com
Senha: qualquer
(Sistema aceita qualquer credencial para demonstração)
```

---

## 🎯 Recursos Avançados

### Context API para Gerenciamento de Estado Global
```javascript
useApiDataContext() // Fornece:
- apiData: Dados da API
- selectedDeviceId: Dispositivo ativo
- periodFilter: 'monthly' ou 'daily'
- selectedPeriodIndex: Índice do período selecionado
```

### Hooks Customizados
- `useApiData()`: Busca e enriquece dados da API
- `useChartData()`: Processa dados para gráficos
- `use-mobile()`: Detecta device mobile

### Cálculos Automáticos
- Enriquecimento de dados (calcula "sem sistema" se não fornecido)
- Normalização de valores (garante não-negativos)
- Agregação de múltiplos dispositivos
- Paginação automática de dados

---

## 📱 Responsividade

O dashboard é totalmente responsivo:

- **Desktop (1024px+)**: Layout 3-4 colunas com sidebar fixo
- **Tablet (768px-1023px)**: Layout 2 colunas adaptado
- **Mobile (<768px)**: Layout 1 coluna com menu deslizante

Usa Tailwind CSS breakpoints:
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 🔮 Roadmap e Funcionalidades Futuras

### 🚧 Próximas Implementações (Curto Prazo)

#### Análise Avançada
- [ ] Previsão de consumo usando ML/IA
- [ ] Alertas automáticos quando consumo ultrapassa meta
- [ ] Recomendações de economia personalizadas
- [ ] Análise de padrões de consumo

#### Funcionalidades de Relatórios
- [ ] Exportação de relatórios em PDF
- [ ] Relatórios mensais/anuais customizáveis
- [ ] Comparações históricas (ano vs. ano anterior)
- [ ] Gráficos de tendência anual
- [ ] Relatórios por dispositivo com análise individual

#### Gestão de Dispositivos
- [ ] CRUD completo de dispositivos (criar, editar, deletar)
- [ ] Categorização de dispositivos por tipo
- [ ] Histórico de atualizações de firmware
- [ ] Status de conectividade em tempo real
- [ ] Notificações de desconexão

#### Sistema de Notificações
- [ ] Email alerts para anomalias
- [ ] SMS para alertas críticos
- [ ] Push notifications no navegador
- [ ] Histórico de notificações
- [ ] Configuração de preferências de alerta

#### Modo Escuro
- [ ] Dark mode completo
- [ ] Toggle de tema
- [ ] Persistência de preferência

#### Funcionalidades Financeiras
- [ ] Cálculo de ROI (Return on Investment)
- [ ] Projeção de economia anual
- [ ] Análise de custo-benefício por dispositivo
- [ ] Comparação de tarifa de energia

### 🎯 Melhorias de Médio Prazo

#### Interface Melhorada
- [ ] Customização de dashboard (widgets arrastar-soltar)
- [ ] Múltiplas dashboards personalizadas
- [ ] Widgets minimizáveis/redimensionáveis
- [ ] Temas de cores customizáveis

#### Autenticação e Segurança
- [ ] Autenticação com OAuth 2.0 (Google, Microsoft)
- [ ] Autenticação de dois fatores (2FA)
- [ ] Gerenciamento de permissões e roles
- [ ] Auditoria de ações de usuários
- [ ] Criptografia de dados sensíveis

#### Gerenciamento Multi-Usuário
- [ ] Suporte a múltiplos usuários por conta
- [ ] Diferentes níveis de acesso (admin, viewer, editor)
- [ ] Controle de quem pode editar metas
- [ ] Histórico de alterações com autor
- [ ] Compartilhamento de relatórios

### 📊 Expansão de Dados e Analytics

#### Dados Históricos
- [ ] Armazenamento de histórico ilimitado
- [ ] Análise de tendências de longo prazo
- [ ] Comparações período a período
- [ ] Sazonalidade e padrões cíclicos

#### Integrações Externas
- [ ] Integração com Smart Meters
- [ ] Sincronização com sistemas de BI
- [ ] API REST pública para integração
- [ ] Webhooks para eventos de consumo
- [ ] Integração com plataformas de IoT

### 🔧 Infraestrutura e Devops

#### Deploy e CI/CD
- [ ] Pipeline de CI/CD automatizado
- [ ] Deploy automático em staging/produção
- [ ] Testes automatizados (unit, integration)
- [ ] Monitoramento de performance
- [ ] Observabilidade e logging

#### Escalabilidade
- [ ] Cache de dados (Redis)
- [ ] Paginação para grandes datasets
- [ ] Lazy loading de componentes
- [ ] Otimização de bundle size
- [ ] Service Workers para offline mode

### 🌍 Internacionalização

- [ ] Suporte a múltiplos idiomas
- [ ] Formatação de data/hora por locale
- [ ] Símbolos de moeda dinâmicos
- [ ] RTL support para idiomas da direita

### 📱 Aplicativo Mobile

- [ ] App React Native (iOS/Android)
- [ ] Sync de dados offline
- [ ] Notificações push nativa
- [ ] Acesso ao câmera para leitura de QR code
- [ ] Widget de status na tela inicial

### 🤖 Inteligência Artificial

- [ ] Chatbot para perguntas sobre economia
- [ ] Detecção automática de anomalias
- [ ] Previsão de falhas em equipamentos
- [ ] Otimização automática de consumo
- [ ] Análise de sentimento em feedbacks

---

## 🛠️ Debugging e Desenvolvimento

### Console Logs
O sistema inclui logs detalhados para debugging:

```javascript
// Logs de API
console.log('📊 Enriched API Data:', enrichedData)

// Logs de meta
console.log('🔧 Tentando salvar meta:', { newValue, deviceId, periodFilter })
console.log('✅ Meta salva com sucesso')
console.log('❌ Valor inválido para meta:', costInputValue)
```

### React DevTools
Compatível com extensão React DevTools para inspeção de componentes e estado.

---

## 🤝 Contribuição

Para contribuir ao projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto foi desenvolvido para a **Ecoarenergy** e está protegido por direitos autorais.

---

## 👥 Autores e Créditos

Desenvolvido com ❤️ usando:
- **React 18** + **Vite**
- **Tailwind CSS 4** para styling
- **shadcn/ui** para componentes
- **ECharts** para visualizações
- **Lucide React** para ícones

---

## 📞 Contato e Suporte

Para dúvidas, sugestões ou reportar bugs:

- 📧 Email: support@ecoarenergy.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-repo/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/seu-repo/discussions)

---

## 🎓 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [ECharts Documentation](https://echarts.apache.org)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Última atualização**: Dezembro 2024  
**Versão**: 1.0.0  
**Status**: Em desenvolvimento ativo
