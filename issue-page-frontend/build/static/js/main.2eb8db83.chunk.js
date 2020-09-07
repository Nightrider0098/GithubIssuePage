(this["webpackJsonpissue-page-frontend"]=this["webpackJsonpissue-page-frontend"]||[]).push([[0],{12:function(e,a,t){e.exports=t(28)},17:function(e,a,t){},18:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),s=(t(17),t(18),t(1)),c=t(2),i=t(5),d=t(4),m=t(3),p=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={title:"",comment:""},n.insertNewIssue=n.insertNewIssue.bind(Object(i.a)(n)),n.titleHandler=n.titleHandler.bind(Object(i.a)(n)),n.commentHandler=n.commentHandler.bind(Object(i.a)(n)),n}return Object(c.a)(t,[{key:"insertNewIssue",value:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,comment:this.state.comment})};fetch("http://localhost:5400/add-issue",e).then((function(e){return e.json()})).then((function(e){document.getElementById("closeModal").click()})),this.props.refreshPage(void 0)}},{key:"titleHandler",value:function(e){this.setState({title:e.target.value})}},{key:"commentHandler",value:function(e){this.setState({comment:e.target.value})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-success ml-2","data-toggle":"modal","data-target":"#exampleModal"},"New Issue"),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header pb-0"},r.a.createElement("div",{className:"form-group",style:{width:"95%"}},r.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"Title",onChange:this.titleHandler})),r.a.createElement("button",{type:"button",id:"closeModal",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body pb-0"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"want to add commment?"}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button ",className:"btn btn-success pull-right","data-dismiss":"modal",onClick:this.insertNewIssue},"Submit new issue"))))))}}]),t}(n.Component),u=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={closed:void 0},n.filterSelectionHandler=n.filterSelectionHandler.bind(Object(i.a)(n)),n}return Object(c.a)(t,[{key:"filterSelectionHandler",value:function(e){this.props.filterHandler(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-outline-secondary dropdown-toggle btn-light",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Filters"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"/#",onClick:function(){return e.filterSelectionHandler(void 0)}},"Show all"),r.a.createElement("a",{className:"dropdown-item",href:"/#",onClick:function(){return e.filterSelectionHandler(0)}},"is Open"),r.a.createElement("a",{className:"dropdown-item",href:"/#",onClick:function(){return e.filterSelectionHandler(1)}},"is Closed"))),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",style:{backgroundColor:"white"},id:"basic-addon1"},r.a.createElement("i",{className:"fa fa-search",style:{color:"black",backgroundColor:"white"},"aria-hidden":"true"}))),r.a.createElement("input",{type:"text ",className:"form-control",id:"inlineFormInputGroupUsername2",style:{borderLeft:"none"},placeholder:"is:issue: is:open"}),r.a.createElement("button",{className:"btn  ml-2 ",style:{border:"2px solid #adaaaa"}},r.a.createElement("i",{className:"fas fa-tag mr-1"}),"label",r.a.createElement("span",{className:"badge badge-light badge-pill"},"4")),r.a.createElement("button",{className:"btn  ml-2",style:{border:"2px solid #adaaaa"}},r.a.createElement("i",{className:"fas fa-map-signs"})," Milestone",r.a.createElement("span",{className:"badge badge-light badge-pill"},"10")),r.a.createElement(p,{refreshPage:this.filterSelectionHandler}))}}]),t}(n.Component),h=t(10),b=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return void 0!==this.props.name&&this.props.name.commentCount>0?r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-comment-alt mr-1"}),this.props.name.commentCount):r.a.createElement("div",{style:{display:"none"}})}}]),t}(n.Component);h.a.watch();var v=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={name:n.props.name},n}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.state.name!==this.props.name&&this.setState({name:this.props.name})}},{key:"render",value:function(){return void 0!==this.state.name?r.a.createElement("tr",{key:this.state.name.id},r.a.createElement("td",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"media"},r.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x mr-2 text-success"}),r.a.createElement("div",{className:"media-body text-left  "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h5",{className:"mt-0 text-left"},r.a.createElement("strong",null,this.state.name.topic))),r.a.createElement("div",{className:"col-sm-5"}),r.a.createElement("div",{className:"col-sm-1 ",style:{textAlign:"right"}},r.a.createElement(b,{name:this.state.name}))),"#",this.state.name.id," opened ",Math.floor((new Date-new Date(this.state.name.creationdate))/864e5)," days ago by ",this.state.name.author))))):r.a.createElement("tr",{key:Math.random(),style:{display:"none"}})}}]),t}(n.Component),f=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:["",""],records:10,laterRecords:8},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.PageHandler(0)}},{key:"componentDidUpdate",value:function(){this.state.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"RowsCreator",value:function(){for(var e=[],a=0;a<this.state.records;a++)e.push(r.a.createElement(v,{name:this.state.data[a]}));for(this.state.data.length>a&&e.push(r.a.createElement("td",{style:{border:"none"}}));a<this.state.laterRecords;a++)e.push(r.a.createElement(v,{name:this.state.data[a]}));return e}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered rounded table-hover mt-3",style:{border:"none",borderSpacing:"0px",borderCollapse:"separate"}},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",style:{textAlign:"left",padding:"0px",borderRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 pt-3 pl-5"},r.a.createElement("i",{className:"fas fa-exclamation-circle m-1 text-dark"}),r.a.createElement("strong",null,this.props.openIssue," Open"),r.a.createElement("i",{className:"fas fa-check m-1 ml-3"}),this.props.closeIssue," Closed"),r.a.createElement("div",{className:"col-lg-2"}),r.a.createElement("div",{className:"col-lg-6 "},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light sm-light",style:{display:"inline-block"}},r.a.createElement("div",{className:" collapse  navbar-collapse ",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto "},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Author"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Label"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Projects"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Millestones"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Assignee"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link  dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/#"},"Another action"))))))))))),r.a.createElement("tbody",null,this.RowsCreator())))}}]),t}(n.Component),E=t(11),g=t.n(E);t(27);window.React=r.a;var N=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handlePageClick=function(e){var a=e.selected,t=Math.ceil(a);n.setState({page:t},(function(){n.loadCommentsFromServer()}))},n.state={data:[],page:0},n.loadCommentsFromServer=n.loadCommentsFromServer.bind(Object(i.a)(n)),n.handlePageClick=n.handlePageClick.bind(Object(i.a)(n)),n}return Object(c.a)(t,[{key:"loadCommentsFromServer",value:function(){this.props.PageHandler(this.state.page)}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return r.a.createElement("div",{id:"react-paginate"},r.a.createElement(g.a,{previousLabel:"< Previous",nextLabel:"Next >",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}}]),t}(n.Component),w=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:[],totalIssue:0,closeIssue:0,closed:void 0},n.UpdateRecords=n.UpdateRecords.bind(Object(i.a)(n)),n.updateFilter=n.updateFilter.bind(Object(i.a)(n)),n}return Object(c.a)(t,[{key:"updateFilter",value:function(e){var a=this;this.setState({closed:e},(function(){a.UpdateRecords(0)}))}},{key:"UpdateRecords",value:function(e){var a=this;fetch("http://localhost:5400/list-issue?page="+e+"&isclosed="+this.state.closed).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data,totalIssue:e.issueCount,closeIssue:e.closeCount})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(u,{filterHandler:this.updateFilter}),r.a.createElement(f,{data:this.state.data,openIssue:this.state.totalIssue-this.state.closeIssue,closeIssue:this.state.closeIssue,PageHandler:this.UpdateRecords}),r.a.createElement(N,{PageHandler:this.UpdateRecords}))}}]),t}(n.Component);var y=function(){return r.a.createElement("div",{className:"App "},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2eb8db83.chunk.js.map