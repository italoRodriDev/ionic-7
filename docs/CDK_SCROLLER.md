O CDK Scroller, parte do Angular CDK (Component Development Kit), é uma ferramenta eficiente para implementar virtual scroll em listas extensas. Ele renderiza apenas os itens visíveis, melhorando a performance de aplicativos que exibem grandes volumes de dados.

Aqui está um exemplo básico de como usar o CDK Virtual Scroller:

# 1. Instalar dependências necessárias
>>> npm install @angular/cdk --force

# 2. Importar o módulo no Angular

````typescript
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [...],
  imports: [
    ScrollingModule,
    ...
  ],
})
export class AppModule {}
````

# 3. Criar a estrutura HTML

````HTML
<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
  <div *cdkVirtualFor="let item of items" class="example-item">
    {{ item }}
  </div>
</cdk-virtual-scroll-viewport>
````

>> <itemSize>: Define a altura (em pixels) de cada item na lista.
>> <cdkVirtualFor>: Substitui o *ngFor para suportar a renderização virtual.

# 5. Adicionar estilos (opcional)

````SCSS
.example-viewport {
  height: 400px; /* Altura do scroll */
  width: 300px;  /* Largura do scroll */
  border: 1px solid #ccc;
  overflow: auto;
}

.example-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
}
````
# 6. Benefícios do CDK Scroller

Gerenciamento automático da memória.
Compatível com outros componentes do Angular.
Flexível e altamente personalizável.