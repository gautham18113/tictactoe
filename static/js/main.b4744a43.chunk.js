(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var n=r(8),s=r(3),a=r(4),i=r(6),c=r(5),u=r(1),l=r.n(u),o=r(7),h=r.n(o),d=(r(14),r(0));function j(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),m=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],currentPlayer:"X",stepNumber:0},n}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],n=r.squares.slice();v(r.squares)||r.squares[e]||(n[e]=this.state.currentPlayer,this.setState({history:t.concat([{squares:n}]),currentPlayer:"X"===this.state.currentPlayer?"O":"X",stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,currentPlayer:e%2===0?"X":"O"})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=v(n.squares),a=r.map((function(e,r){var n=r?"Jump to move number # "+r:"Jump to game beginning";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:n})},r)}));return e="tie"===s?"Its a Tie!":s?"The Winner is: "+("X"===this.state.currentPlayer?"O":"X"):"Current Player: "+this.state.currentPlayer,Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(b,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:e}),Object(d.jsx)("ol",{children:a})]})]})}}]),r}(l.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(n.a)(t[r],3),a=s[0],i=s[1],c=s[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return e[a]}return!1===e.includes(null)?"tie":null}h.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.b4744a43.chunk.js.map