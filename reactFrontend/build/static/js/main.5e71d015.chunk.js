(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{29:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),c=a(9),n=a.n(c),l=(a(34),a(25)),i=a(26),d=a(28),u=a(27),s=a(10),h=a.n(s),m=a(63),p=a(71),g=a(64),f=a(65),v=a(66),E=a(67),P=a(68),D=a(69),b=a(70),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this)).state={items:[],newProductData:{nombre_producto:"",referencia:"",precio:"",peso:"",categoria:"",stock:"",fecha_venta:""},editProductData:{nombre_producto:"",referencia:"",precio:"",peso:"",categoria:"",stock:"",fecha_venta:""},newProductModal:!1,editProductModal:!1},r}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this._refreshProduct()}},{key:"toggleNewProductModal",value:function(){this.setState({newProductModal:!this.state.newProductModal})}},{key:"toggleEditProductModal",value:function(){this.setState({editProductModal:!this.state.editProductModal})}},{key:"addProduct",value:function(){var e=this;console.log("hello");var t=this.state.newProductData,a=t.nombre_producto,r=t.referencia,o=t.precio,c=t.peso,n=t.categoria,l=t.stock,i=t.fecha_venta;h.a.post("http://localhost/api/view/product.php",{nombre_producto:a,referencia:r,precio:o,peso:c,categoria:n,stock:l,fecha_venta:i}).then((function(t){var a=e.state.items;a.push(t.data),e.setState({items:a,newProductModal:!1,newProductData:{nombre_producto:"",referencia:"",precio:"",peso:"",categoria:"",stock:"",fecha_venta:""}}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"updateProduct",value:function(){var e=this,t=this.state.editProductData,a=t.nombre_producto,r=t.referencia,o=t.precio,c=t.peso,n=t.categoria,l=t.stock,i=t.fecha_venta;h.a.put("http://localhost/api/view/product.php?id="+this.state.editProductData.id,{nombre_producto:a,referencia:r,precio:o,peso:c,categoria:n,stock:l,fecha_venta:i}).then((function(t){e._refreshProduct(),e.setState({editProductModal:!1,editProductData:{nombre_producto:"",referencia:"",precio:"",peso:"",categoria:"",stock:"",fecha_venta:""}})})).catch((function(e){console.log(e)}))}},{key:"editProduct",value:function(e,t,a,r,o,c,n,l){this.setState({editProductData:{id:e,nombre_producto:t,referencia:a,precio:r,peso:o,categoria:c,stock:n,fecha_venta:l},editProductModal:!this.state.editProductModal})}},{key:"deleteProduct",value:function(e){var t=this;h.a.delete("http://localhost/api/view/product.php?id="+e).then((function(e){t._refreshProduct(),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"_refreshProduct",value:function(){var e=this;h.a.get("http://localhost/api/view/product.php").then((function(t){e.setState({items:t.data}),console.log(e.state.items)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.id),o.a.createElement("td",null,t.nombre_producto),o.a.createElement("td",null,t.referencia),o.a.createElement("td",null,t.precio),o.a.createElement("td",null,t.peso),o.a.createElement("td",null,t.categoria),o.a.createElement("td",null,t.stock),o.a.createElement("td",null,t.fecha_creacion),o.a.createElement("td",null,t.fecha_venta),o.a.createElement("td",null,o.a.createElement(m.a,{color:"success",size:"sm",onClick:e.editProduct.bind(e,t.id,t.nombre_producto,t.referencia,t.precio,t.peso,t.categoria,t.stock,t.fecha_venta)},"Editar"),o.a.createElement(m.a,{color:"danger",onClick:e.deleteProduct.bind(e,t.id),size:"sm"},"Eliminar")))}));return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Aplicaci\xf3n producto"),o.a.createElement(m.a,{color:"primary",onClick:this.toggleNewProductModal.bind(this)},"Agregar producto"),o.a.createElement(p.a,{isOpen:this.state.newProductModal,toggle:this.toggleNewProductModal.bind(this)},o.a.createElement(g.a,{toggle:this.toggleNewProductModal.bind(this)},"Agregar producto "),o.a.createElement(f.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"nombre del producto"},"Nombre del producto"),o.a.createElement(P.a,{type:"text",id:"nombre_producto",placeholder:"ingresar normbre del producto",value:this.state.newProductData.nombre_producto,onChange:function(t){var a=e.state.newProductData;a.nombre_producto=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"referencia"},"Referencia"),o.a.createElement(P.a,{type:"number",id:"referencia",placeholder:"ingresar referencia",value:this.state.newProductData.referencia,onChange:function(t){var a=e.state.newProductData;a.referencia=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"precio"},"Precio"),o.a.createElement(P.a,{type:"number",name:"precio",id:"precio",placeholder:"ingresar precio",value:this.state.newProductData.precio,onChange:function(t){var a=e.state.newProductData;a.precio=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"peso"},"Peso"),o.a.createElement(P.a,{type:"number",name:"peso",id:"peso",placeholder:"ingresar peso",value:this.state.newProductData.peso,onChange:function(t){var a=e.state.newProductData;a.peso=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"categoria"},"Categor\xeda"),o.a.createElement(P.a,{type:"text",name:"categoria",id:"categoria",placeholder:"ingresar categoria",value:this.state.newProductData.categoria,onChange:function(t){var a=e.state.newProductData;a.categoria=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"stock"},"Stock"),o.a.createElement(P.a,{type:"text",name:"stock",id:"stock",placeholder:"ingresar stock",value:this.state.newProductData.stock,onChange:function(t){var a=e.state.newProductData;a.stock=t.target.value,e.setState({newProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"fecha_venta"},"Fecha venta"),o.a.createElement(P.a,{type:"datetime",name:"fecha_venta",id:"fecha_venta",placeholder:"ingresar fecha venta",value:this.state.newProductData.fecha_venta,onChange:function(t){var a=e.state.newProductData;a.fecha_venta=t.target.value,e.setState({newProductData:a})}}))),o.a.createElement(D.a,null,o.a.createElement(m.a,{color:"primary",onClick:this.addProduct.bind(this)},"Agregar")," ",o.a.createElement(m.a,{color:"secondary",onClick:this.toggleNewProductModal.bind(this)},"Cancel"))),o.a.createElement(p.a,{isOpen:this.state.editProductModal,toggle:this.toggleEditProductModal.bind(this)},o.a.createElement(g.a,{toggle:this.toggleEditProductModal.bind(this)},"Editar producto "),o.a.createElement(f.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"nombre del producto"},"Nombre del producto"),o.a.createElement(P.a,{type:"text",id:"nombre_producto",placeholder:"ingresar normbre del producto",value:this.state.editProductData.nombre_producto,onChange:function(t){var a=e.state.editProductData;a.nombre_producto=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"referencia"},"Referencia"),o.a.createElement(P.a,{type:"number",id:"referencia",placeholder:"ingresar referencia",value:this.state.editProductData.referencia,onChange:function(t){var a=e.state.editProductData;a.referencia=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"precio"},"Precio"),o.a.createElement(P.a,{type:"number",name:"precio",id:"precio",placeholder:"ingresar precio",value:this.state.editProductData.precio,onChange:function(t){var a=e.state.editProductData;a.precio=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"peso"},"Peso"),o.a.createElement(P.a,{type:"number",name:"peso",id:"peso",placeholder:"ingresar peso",value:this.state.editProductData.peso,onChange:function(t){var a=e.state.editProductData;a.peso=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"categoria"},"Categor\xeda"),o.a.createElement(P.a,{type:"text",name:"categoria",id:"categoria",placeholder:"ingresar categoria",value:this.state.editProductData.categoria,onChange:function(t){var a=e.state.editProductData;a.categoria=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"stock"},"Stock"),o.a.createElement(P.a,{type:"text",name:"stock",id:"stock",placeholder:"ingresar stock",value:this.state.editProductData.stock,onChange:function(t){var a=e.state.editProductData;a.stock=t.target.value,e.setState({editProductData:a})}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{for:"fecha_venta"},"Fecha venta"),o.a.createElement(P.a,{type:"datetime",name:"fecha_venta",id:"fecha_venta",placeholder:"ingresar fecha venta",value:this.state.editProductData.fecha_venta,onChange:function(t){var a=e.state.editProductData;a.fecha_venta=t.target.value,e.setState({editProductData:a})}}))),o.a.createElement(D.a,null,o.a.createElement(m.a,{color:"primary",onClick:this.updateProduct.bind(this)},"Editar")," ",o.a.createElement(m.a,{color:"secondary",onClick:this.toggleEditProductModal.bind(this)},"Cancel"))),o.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Nombre de producto"),o.a.createElement("th",null,"Referencia"),o.a.createElement("th",null,"Precio"),o.a.createElement("th",null,"Peso"),o.a.createElement("th",null,"Categoria"),o.a.createElement("th",null,"Stock"),o.a.createElement("th",null,"Fecha de creaci\xf3n"),o.a.createElement("th",null,"Fecha de Venta"),o.a.createElement("th",null,"Acciones"))),o.a.createElement("tbody",null,t)))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(k,{name:"123"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5e71d015.chunk.js.map