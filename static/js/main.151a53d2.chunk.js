(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{129:function(t,e,n){},130:function(t,e,n){},131:function(t,e,n){},134:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){},157:function(t,e,n){},158:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){},166:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),r=n(20),c=(n(129),n(130),n(50)),l=n(17),u=n(45),m=n(12),h=n(13),j=n(15),d=n(14),b=n(196),p=(n(131),n(2)),O=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"curtain",children:Object(p.jsxs)("div",{className:"curtain-wrapper",children:[Object(p.jsx)("div",{className:"curtain-panel curtain-panel-left"}),Object(p.jsxs)("div",{className:"curtain-content",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h1",{children:"Welcome"}),Object(p.jsx)("h2",{children:"to"}),Object(p.jsx)("h1",{children:"The Shoppies"})]}),Object(p.jsx)("div",{className:"nominate-button",children:Object(p.jsx)(b.a,{variant:"contained",color:"primary",disableElevation:!0,component:c.b,to:"/nominate-movies",children:"Nominate Movies"})})]}),Object(p.jsx)("div",{className:"curtain-panel curtain-panel-right"})]})})}}]),n}(a.a.Component),v=n(197),f=n(198),x=n(211),g=n(209),S=n(199),y=n(200),N=n(214),C=n(216),I=n(98),E=n.n(I),w=(n(134),[{id:0,label:"Home",href:"/"},{id:1,label:"Nominate Movies",href:"/nominate-movies"},{id:2,label:"My Nominations",href:"/my-nominations"}]),k=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={selectedNavOption:"/",anchorEl:null},t.handleChange=function(e,n){t.setState({selectedNavOption:n})},t.handleMenu=function(e){t.setState({anchorEl:e.target})},t.handleClose=function(){t.setState({anchorEl:null})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({selectedNavOption:window.location.pathname})}},{key:"render",value:function(){var t=this;return Object(p.jsx)(v.a,{position:"relative",color:"primary",className:"navbar",children:Object(p.jsxs)(f.a,{container:!0,direction:"row",alignContent:"space-between",spacing:7,children:[Object(p.jsx)(f.a,{item:!0,xs:8,children:"The Shoppies"}),Object(p.jsxs)(f.a,{item:!0,xs:4,children:[Object(p.jsx)(x.a,{smDown:!0,children:Object(p.jsx)(g.a,{className:"navTabs",value:this.state.selectedNavOption,indicatorColor:"secondary",onChange:this.handleChange,children:w.map((function(t,e){var n=t.label,i=t.href;return Object(p.jsx)(S.a,{value:i,label:n,component:c.b,to:i},e)}))})}),Object(p.jsxs)(x.a,{mdUp:!0,children:[Object(p.jsx)(y.a,{className:"navTabs",onClick:this.handleMenu,children:Object(p.jsx)(E.a,{color:"secondary"})}),Object(p.jsx)(N.a,{anchorEl:this.state.anchorEl,open:!!this.state.anchorEl,onClose:this.handleClose,children:w.map((function(e,n){var i=e.label,a=e.href;return Object(p.jsx)(C.a,{onClick:t.handleClose,selected:a===window.location.pathname,component:c.b,to:a,children:i},n)}))})]})]})]})})}}]),n}(a.a.Component),D=n(62),P=n(114),_=n(213),R=n(203),M=n(99),T=n.n(M),A=n(100),U=n.n(A),V=n(26),q=n.n(V),G=n(47),H={MOVIE_SEARCH_SUCCESS:"MOVIE_SEARCH_SUCCESS",RETRIEVE_MOVIE_PLOT_SHORT:"RETRIEVE_MOVIE_PLOT_SHORT",RETRIEVE_MOVIE_GENRES:"RETRIEVE_MOVIE_GENRES",ADD_NOMINATION_SUCCESS:"ADD_NOMINATION_SUCCESS",REMOVE_NOMINATION_SUCCESS:"REMOVE_NOMINATION_SUCCESS",SUBMIT_NOMINATION_SUCCESS:"SUBMIT_NOMINATION_SUCCESS",CLEAR_SEARCH_SUCCESS:"CLEAR_SEARCH_SUCCESS"},Q=n(63),L=n.n(Q),Y=function(t,e){return function(){var n=Object(G.a)(q.a.mark((function n(i){var a,o,s,r,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://www.omdbapi.com/?apikey=2ae73c8e&type=movie&s="+t+"&page="+e,n.next=3,L.a.get(a);case 3:o=n.sent,s=o.data,r=s.Search?s.Search.filter((function(t,e,n){return n.findIndex((function(e){return e.imdbID===t.imdbID}))===e})):[],c=s.totalResults,i({type:H.MOVIE_SEARCH_SUCCESS,payload:{result:r,totalResults:c,page:e}});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},F=function(t){return function(){var e=Object(G.a)(q.a.mark((function e(n){var i,a,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i="+t,e.next=3,L.a.get(i);case 3:a=e.sent,o=a.data,n({type:H.RETRIEVE_MOVIE_PLOT_SHORT,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(t){return function(){var e=Object(G.a)(q.a.mark((function e(n,i){var a,o,s,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=i().movie.nominations).some((function(e){return e.imdbID===t}))&&0!==a.length){e.next=10;break}return o="https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i="+t,e.next=5,L.a.get(o);case 5:s=e.sent,(r=s.data).Genre=r.Genre.split(", "),a.push(r),n({type:H.ADD_NOMINATION_SUCCESS,payload:a});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},z=function(t){return function(){var e=Object(G.a)(q.a.mark((function e(n,i){var a,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i().movie.nominations,o=a.findIndex((function(e){return e.imdbID===t})),a.splice(o,1),n({type:H.REMOVE_NOMINATION_SUCCESS,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},W=function(){return function(){var t=Object(G.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:H.SUBMIT_NOMINATION_SUCCESS});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(){return function(){var t=Object(G.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:H.CLEAR_SEARCH_SUCCESS});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=(n(155),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={query:"",clearQueryVisible:!1},t.handleChange=function(e){var n,i=e.target,a=i.value,o=i.name;t.setState((n={},Object(D.a)(n,o,a),Object(D.a)(n,"clearQueryVisible",""!==a),n)),t.props.searchMovies(a,1),t.props.updateQuery(a)},t.searchSubmit=function(e){e.preventDefault();var n=t.state.query;n&&(t.props.searchMovies(n,1),t.setState({clearQueryVisible:!0}))},t.clearQuery=function(e){t.props.clearSearch(),t.setState({query:"",clearQueryVisible:!1}),t.props.updateQuery("")},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({query:"",clearQueryVisible:!1})}},{key:"render",value:function(){return Object(p.jsx)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(p.jsx)(f.a,{container:!0,item:!0,xs:12,children:Object(p.jsxs)(P.a,{component:"form",id:"search-bar-container",variant:"outlined",onSubmit:this.searchSubmit,children:[this.state.clearQueryVisible?Object(p.jsx)(y.a,{onClick:this.clearQuery,children:Object(p.jsx)(T.a,{})}):null,Object(p.jsx)(_.a,{id:"search",placeholder:"Search For Movies",fullWidth:!0,value:this.state.query,onChange:this.handleChange,name:"query"}),Object(p.jsx)(R.a,{orientation:"vertical",flexItem:!0,variant:"middle"}),Object(p.jsx)(y.a,{type:"submit",children:Object(p.jsx)(U.a,{})})]})})})}}]),n}(a.a.Component)),X=Object(r.b)(null,(function(t){return{searchMovies:function(e,n){return t(Y(e,n))},clearSearch:function(){return t(J())}}}))(K),Z=n(204),$=n(102),tt=n.n($),et=n(103),nt=n.n(et),it=n(104),at=n.n(it),ot=n(105),st=n.n(ot),rt=n(193),ct=n(205),lt=n(101),ut=n.n(lt),mt=n(51),ht=n.n(mt),jt=n(55),dt=n.n(jt),bt=n.p+"static/media/defaultPoster.497fa354.jpg",pt=(n(156),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={movie:t.props.movie,nominations:t.props.movies.nominations},t}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(t){var e=this.props.movies;e.nominations===t.movies.nominations&&e.submitted===t.movies.submitted||this.setState({nominations:this.props.movies.nominations})}},{key:"nominateMovie",value:function(t,e){var n=this,i='Successfully nominated "'+e+'"';this.props.addNomination(t).then(this.props.enqueueSnackbar(i,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:1500,TransitionComponent:rt.a,variant:"success",action:function(t){return Object(p.jsx)(y.a,{onClick:function(){n.props.closeSnackbar(t)},className:"close-toast",children:Object(p.jsx)(dt.a,{})})}}))}},{key:"addDefaultSrc",value:function(t){t.target.src=bt}},{key:"render",value:function(){var t=this.state.movie;return Object(p.jsx)(Z.a,{variant:"outlined",id:"result-card",children:Object(p.jsx)(f.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",spacing:1,children:Object(p.jsx)(ct.a,{children:Object(p.jsxs)(f.a,{container:!0,direction:"row",spacing:2,children:[Object(p.jsx)(f.a,{item:!0,children:t.Poster?Object(p.jsx)("img",{id:"poster",src:t.Poster,alt:"Poster not available",onError:this.addDefaultSrc}):Object(p.jsx)("img",{id:"poster",src:bt,alt:"Poster not available"})}),Object(p.jsx)(f.a,{item:!0,xs:!0,sm:!0,container:!0,children:Object(p.jsxs)(f.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:1,children:[Object(p.jsxs)(f.a,{item:!0,children:[Object(p.jsx)("b",{children:t.Title})," (",t.Year,")"]}),Object(p.jsx)(f.a,{item:!0,children:t.Plot}),Object(p.jsx)(f.a,{item:!0,xs:!0,id:"tags-container",children:Object(p.jsx)(f.a,{container:!0,spacing:1,children:t.Genre?t.Genre.map((function(t){return Object(p.jsx)(f.a,{item:!0,children:Object(p.jsx)("div",{className:"tags",children:t})},t)})):null})}),Object(p.jsx)(f.a,{item:!0,children:Object(p.jsxs)(f.a,{className:"movie-action-buttons",justify:"flex-end",container:!0,spacing:1,children:[Object(p.jsxs)(f.a,{item:!0,children:[Object(p.jsx)(x.a,{xsDown:!0,children:Object(p.jsxs)(b.a,{className:"fullsize-button",variant:"outlined",onClick:function(){return window.open("https://www.imdb.com/title/"+t.imdbID+"/","_blank")},children:["Info ",Object(p.jsx)(ht.a,{})]})}),Object(p.jsx)(x.a,{smUp:!0,children:Object(p.jsx)(y.a,{onClick:function(){return window.open("https://www.imdb.com/title/"+t.imdbID+"/","_blank")},children:Object(p.jsx)(ht.a,{})})})]}),Object(p.jsx)(f.a,{item:!0,children:this.props.movies.submitted?null:Object(p.jsxs)("div",{children:[Object(p.jsx)(x.a,{xsDown:!0,children:Object(p.jsx)(b.a,{className:"fullsize-button",variant:"outlined",disabled:this.state.nominations&&(this.state.nominations.some((function(e){return e.imdbID===t.imdbID}))||5===this.state.nominations.length),onClick:this.nominateMovie.bind(this,t.imdbID,t.Title),children:"Nominate"})}),Object(p.jsx)(x.a,{smUp:!0,children:Object(p.jsx)(y.a,{disabled:this.state.nominations&&(this.state.nominations.some((function(e){return e.imdbID===t.imdbID}))||5===this.state.nominations.length),onClick:this.nominateMovie.bind(this,t.imdbID,t.Title),children:Object(p.jsx)(ut.a,{})})})]})})]})})]})})]})})})},t.imdbID)}}]),n}(a.a.Component)),Ot=Object(r.b)((function(t){return{movies:t.movie}}),(function(t){return{getShortPlot:function(e){return t(F(e))},addNomination:function(e){return t(B(e))}}}))(Object(u.b)(pt)),vt=(n(157),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={movies:t.props.movie.movies,totalResults:t.props.movie.totalResults,currentPage:t.props.movie.currentSearchPage,totalPages:t.props.movie.totalSearchPages},t.handlePageForward=function(e){t.props.searchMovies(t.props.query,t.props.movie.currentSearchPage+1),t.setState({currentPage:t.props.movie.currentSearchPage+1})},t.handlePageBack=function(e){t.props.searchMovies(t.props.query,t.props.movie.currentSearchPage-1),t.setState({currentPage:t.props.movie.currentSearchPage-1})},t.toFirstPage=function(e){t.props.searchMovies(t.props.query,1),t.setState({currentPage:1})},t.toLastPage=function(e){t.props.searchMovies(t.props.query,t.props.movie.totalSearchPages),t.setState({currentPage:t.props.movie.totalSearchPages})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this.state.movies;if(t)for(var e=0;e<t.length;e++)this.props.getShortPlot(t[e].imdbID),this.props.getGenres(t[e].imdbID);this.setState({movies:this.props.movie.movies,totalResults:this.props.movie.totalResults,currentPage:this.props.movie.currentSearchPage,totalPages:this.props.movie.totalSearchPages})}},{key:"componentDidUpdate",value:function(t){if(this.props.movie.movies!==t.movie.movies){var e=this.props.movie.movies;if(e)for(var n=0;n<e.length;n++)this.props.getShortPlot(e[n].imdbID),this.props.getGenres(e[n].imdbID);this.setState({movies:this.props.movie.movies,totalResults:this.props.movie.totalResults,currentPage:this.props.movie.currentPage,totalPages:this.props.movie.totalSearchPages})}}},{key:"render",value:function(){return Object(p.jsx)(Z.a,{id:"result-container",children:Object(p.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:1,children:[Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)("h2",{children:"Search Results"})}),Object(p.jsxs)(f.a,{item:!0,xs:12,children:[this.state.totalResults?Object(p.jsxs)("div",{className:"search-results-total",children:[" Found ",this.state.totalResults,' results for "',this.props.query,'"']}):null,this.state.movies&&this.state.movies.length>0?Object(p.jsxs)("div",{className:"pagination-controls",children:[Object(p.jsx)(y.a,{onClick:this.toFirstPage,disabled:1===this.props.movie.currentSearchPage,children:Object(p.jsx)(tt.a,{})}),Object(p.jsx)(y.a,{onClick:this.handlePageBack,disabled:1===this.props.movie.currentSearchPage,children:Object(p.jsx)(nt.a,{})}),this.props.movie.currentSearchPage,"/",this.state.totalPages,Object(p.jsx)(y.a,{onClick:this.handlePageForward,disabled:this.props.movie.currentSearchPage===this.state.totalPages,children:Object(p.jsx)(at.a,{})}),Object(p.jsx)(y.a,{onClick:this.toLastPage,disabled:this.props.movie.currentSearchPage===this.state.totalPages,children:Object(p.jsx)(st.a,{})})]}):null]}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)("div",{id:"result-card-container",children:this.state.movies&&this.state.movies.length>0?Object(p.jsxs)(f.a,{container:!0,direction:"column",justify:"space-between",spacing:3,children:[" ",this.state.movies.map((function(t){return Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)(Ot,{movie:t})},t.imdbID)}))]}):Object(p.jsx)(f.a,{id:"empty-search",container:!0,direction:"column",justify:"center",spacing:2,children:Object(p.jsxs)(f.a,{item:!0,children:[' No Results found for "',this.props.query,'"']})})})})]})})}}]),n}(a.a.Component)),ft=Object(r.b)((function(t){return{movie:t.movie}}),(function(t){return{getShortPlot:function(e){return t(F(e))},getGenres:function(e){return t(function(t){return function(){var e=Object(G.a)(q.a.mark((function e(n){var i,a,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i="+t,e.next=3,L.a.get(i);case 3:a=e.sent,o=a.data,n({type:H.RETRIEVE_MOVIE_GENRES,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))},searchMovies:function(e,n){return t(Y(e,n))}}}))(vt),xt=n(210),gt=n(217),St=n(75),yt=n.n(St),Nt=(n(158),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={movie:t.props.movie},t}return Object(h.a)(n,[{key:"removeNomination",value:function(t,e){var n=this,i='Removed "'+e+'" from nominations';this.props.removeNomination(t).then(this.props.enqueueSnackbar(i,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:1500,TransitionComponent:rt.a,variant:"error",action:function(t){return Object(p.jsx)(y.a,{onClick:function(){n.props.closeSnackbar(t)},className:"close-toast",children:Object(p.jsx)(dt.a,{})})}}))}},{key:"render",value:function(){var t=this.state.movie;return Object(p.jsx)(Z.a,{id:"nomination-list-card",children:Object(p.jsxs)(f.a,{container:!0,direction:"row",alignItems:"center",children:[Object(p.jsxs)(f.a,{item:!0,xs:!0,children:[Object(p.jsx)("b",{children:t.Title})," (",t.Year,")",Object(p.jsx)(f.a,{container:!0,spacing:1,id:"nomination-tags-container",children:t.Genre?t.Genre.map((function(t){return Object(p.jsx)(f.a,{item:!0,children:Object(p.jsx)("div",{className:"nomination-tags",children:t})},t)})):null})]}),Object(p.jsx)(f.a,{item:!0,children:Object(p.jsx)(gt.a,{title:"More info",placement:"bottom",arrow:!0,children:Object(p.jsx)(y.a,{className:"nomination-card-buttons",onClick:function(){return window.open("https://www.imdb.com/title/"+t.imdbID+"/","_blank")},children:Object(p.jsx)(ht.a,{})})})}),Object(p.jsx)(f.a,{item:!0,children:this.props.movies.submitted?null:Object(p.jsx)(gt.a,{title:"Remove Nomination",placement:"bottom",arrow:!0,children:Object(p.jsx)(y.a,{className:"nomination-card-buttons",onClick:this.removeNomination.bind(this,t.imdbID,t.Title),children:Object(p.jsx)(yt.a,{})})})})]})})}}]),n}(a.a.Component)),Ct=Object(r.b)((function(t){return{movies:t.movie}}),(function(t){return{removeNomination:function(e){return t(z(e))}}}))(Object(u.b)(Nt)),It=n(215),Et=n(206),wt=(n(159),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={nominations:t.props.movie.nominations},t.closeSubmissionDialog=function(e){t.props.closeDialog(!1)},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)(It.a,{open:this.props.isOpen,fullWidth:!0,maxWidth:"sm",children:Object(p.jsxs)(Et.a,{children:[Object(p.jsx)("h3",{children:" You have submitted your nominations! Below are your nominations: "}),Object(p.jsxs)(f.a,{container:!0,direction:"column",children:[this.state.nominations?this.state.nominations.map((function(t){return Object(p.jsxs)(f.a,{item:!0,xs:12,children:[Object(p.jsx)("b",{children:t.Title})," (",t.Year,")"]},t.imdbID)})):null,Object(p.jsxs)(f.a,{item:!0,xs:12,children:[Object(p.jsx)("br",{})," You can continue to use the site to search for movies"]}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)(f.a,{justify:"flex-end",container:!0,spacing:1,children:Object(p.jsx)(b.a,{variant:"outlined",onClick:this.closeSubmissionDialog,children:"Ok"})})})]})]})})}}]),n}(a.a.Component)),kt=Object(r.b)((function(t){return{movie:t.movie}}),null)(wt),Dt=(n(160),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={nominations:t.props.movie.nominations,completeNominations:!1,submitted:t.props.movie.submitted},t.submitNominations=function(e){t.props.submitNominations(),t.setState({completeNominations:!0})},t.closeSubmissionDialog=function(e){t.setState({completeNominations:e,nominations:t.props.movie.nominations,submitted:t.props.movie.submitted})},t}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(t){var e=this.props.movie;e.nominations===t.movie.nominations&&e.submitted===t.movie.submitted||this.setState({nominations:this.props.movie.nominations,submitted:this.props.movie.submitted})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(kt,{isOpen:this.state.completeNominations,closeDialog:this.closeSubmissionDialog}),Object(p.jsx)(Z.a,{id:"nominations-container",children:Object(p.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:1,children:[Object(p.jsxs)(f.a,{item:!0,xs:12,children:[Object(p.jsx)("h2",{children:"Nominations "}),Object(p.jsxs)("h3",{className:"nomination-count",children:["(",this.state.nominations.length,"/5)"]})]}),Object(p.jsxs)(f.a,{item:!0,xs:12,id:"alert-container",children:[this.state.nominations&&5===this.state.nominations.length&&!this.state.submitted?Object(p.jsx)(xt.a,{severity:"success",action:Object(p.jsx)(b.a,{color:"inherit",size:"small",onClick:this.submitNominations,children:"Submit"}),children:"You have added 5 nominations to your list"}):null,this.state.submitted?Object(p.jsx)(xt.a,{severity:"info",children:" You have successfully nominated the following movies: "}):null]}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)("div",{id:"nomination-card-container",children:Object(p.jsx)("div",{id:this.state.nominations&&5===this.state.nominations.length?"alert-shown":"no-alert",children:this.state.nominations&&this.state.nominations.length>0?Object(p.jsx)(f.a,{container:!0,direction:"column",spacing:1,children:this.state.nominations.map((function(t){return Object(p.jsx)(f.a,{item:!0,children:Object(p.jsx)(Ct,{movie:t})},t.imdbID)}))}):Object(p.jsxs)(f.a,{id:"empty-nominations",container:!0,direction:"column",justify:"center",spacing:2,children:[Object(p.jsx)(f.a,{item:!0,children:" Nominations are empty!"}),Object(p.jsx)(f.a,{item:!0,children:" Search for movies and click NOMINATE to add a nomination "})]})})})})]})})]})}}]),n}(a.a.Component)),Pt=Object(r.b)((function(t){return{movie:t.movie}}),(function(t){return{getShortPlot:function(e){return t(F(e))},addNomination:function(e){return t(B(e))},submitNominations:function(){return t(W())}}}))(Dt),_t=(n(161),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={query:""},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.clearSearch()}},{key:"onQueryUpdate",value:function(t){this.setState({query:t})}},{key:"render",value:function(){return Object(p.jsxs)(f.a,{id:"nominate-container",container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:2,children:[Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)("h1",{children:"Nominate Movies"})}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)(X,{updateQuery:this.onQueryUpdate.bind(this)})}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsxs)(f.a,{container:!0,direction:"row",justify:"center",spacing:1,children:[Object(p.jsx)(f.a,{item:!0,xs:12,md:7,children:Object(p.jsx)(ft,{query:this.state.query})}),Object(p.jsx)(f.a,{item:!0,xs:12,md:5,children:Object(p.jsx)(Pt,{})})]})})]})}}]),n}(a.a.Component)),Rt=Object(r.b)(null,(function(t){return{clearSearch:function(){return t(J())}}}))(_t),Mt=(n(162),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={movie:t.props.movie},t}return Object(h.a)(n,[{key:"addDefaultSrc",value:function(t){t.target.src=bt}},{key:"removeNomination",value:function(t,e){var n=this,i='Removed "'+e+'" from nominations';this.props.removeNomination(t).then(this.props.enqueueSnackbar(i,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:1500,TransitionComponent:rt.a,variant:"error",action:function(t){return Object(p.jsx)(y.a,{onClick:function(){n.props.closeSnackbar(t)},className:"close-toast",children:Object(p.jsx)(dt.a,{})})}}))}},{key:"render",value:function(){var t=this.state.movie;return Object(p.jsxs)(Z.a,{id:"nomination-card",children:[Object(p.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",children:[Object(p.jsx)(f.a,{item:!0,xs:12,children:t.Poster?Object(p.jsx)("img",{id:"nomination-poster",src:t.Poster,alt:"Poster not available",onError:this.addDefaultSrc}):Object(p.jsx)("img",{id:"nomination-poster",src:bt,alt:"Poster not available"})}),Object(p.jsxs)(f.a,{xs:12,item:!0,className:"nomination-movie-title",children:[Object(p.jsx)("b",{children:t.Title})," (",t.Year,")"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(gt.a,{title:"More info",placement:"bottom",arrow:!0,children:Object(p.jsx)(y.a,{className:"nomination-card-buttons",onClick:function(){return window.open("https://www.imdb.com/title/"+t.imdbID+"/","_blank")},children:Object(p.jsx)(ht.a,{})})}),this.props.movies.submitted?null:Object(p.jsx)(gt.a,{title:"Remove Nomination",placement:"bottom",arrow:!0,children:Object(p.jsx)(y.a,{className:"nomination-card-buttons",onClick:this.removeNomination.bind(this,t.imdbID,t.Title),children:Object(p.jsx)(yt.a,{})})})]})]},t.imdbID)}}]),n}(a.a.Component)),Tt=Object(r.b)((function(t){return{movies:t.movie}}),(function(t){return{removeNomination:function(e){return t(z(e))}}}))(Object(u.b)(Mt)),At=(n(163),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={nominations:t.props.movie.nominations,completeNominations:!1,submitted:t.props.movie.submitted},t.submitNominations=function(e){t.props.submitNominations(),t.setState({completeNominations:!0})},t.closeSubmissionDialog=function(e){t.setState({completeNominations:e,nominations:t.props.movie.nominations})},t}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(t){var e=this.props.movie;e.nominations===t.movie.nominations&&e.submitted===t.movie.submitted||this.setState({nominations:this.props.movie.nominations,submitted:this.props.movie.submitted})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(kt,{isOpen:this.state.completeNominations,closeDialog:this.closeSubmissionDialog}),Object(p.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:1,children:[Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)("h1",{children:"My Nominations"})}),Object(p.jsx)(f.a,{item:!0,xs:12,id:"my-nomination-alert-container",children:this.state.nominations&&5===this.state.nominations.length&&!this.state.submitted?Object(p.jsx)(xt.a,{severity:"success",action:Object(p.jsx)(b.a,{color:"inherit",size:"small",onClick:this.submitNominations,children:"Submit"}),children:"You have added 5 nominations to your list"}):Object(p.jsx)("div",{className:"nomination-count-message",children:this.state.submitted?"You have successfully nominated the following movies:":"You have nominated "+this.state.nominations.length+'/5 movies. Go to the "Nominate Movies" page to nominate more movies'})}),Object(p.jsx)(f.a,{item:!0,xs:12,children:Object(p.jsx)(f.a,{container:!0,direction:"row",alignItems:"stretch",justify:"center",spacing:1,children:this.state.nominations&&this.state.nominations.length>0?this.state.nominations.map((function(t){return Object(p.jsx)(f.a,{item:!0,xs:12,sm:4,md:!0,lg:!0,id:"nomination-card-wrapper",children:Object(p.jsx)(Tt,{movie:t})},t.imdbID)})):null})})]})]})}}]),n}(a.a.Component)),Ut=Object(r.b)((function(t){return{movie:t.movie}}),(function(t){return{submitNominations:function(){return t(W())}}}))(At);var Vt,qt,Gt=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap",rel:"stylesheet"}),Object(p.jsx)(u.a,{maxSnack:3,children:Object(p.jsxs)(c.a,{basename:"/the-shoppies-fall2021",children:[Object(p.jsx)(k,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(p.jsx)(l.a,{exact:!0,path:"/nominate-movies",component:Rt}),Object(p.jsx)(l.a,{exact:!0,path:"/my-nominations",component:Ut})]})]})})]})},Ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),o(t),s(t)}))},Qt=n(207),Lt=n(24),Yt=n(42),Ft={movies:null,nominations:[],submitted:!1,totalResults:0,currentSearchPage:1,totalSearchPages:0},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H.MOVIE_SEARCH_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},t),{},{movies:e.payload.result,totalResults:e.payload.totalResults,currentSearchPage:e.payload.page,totalSearchPages:e.payload.totalResults>=10?Math.floor(e.payload.totalResults/10):1});case H.RETRIEVE_MOVIE_PLOT_SHORT:var n=t.movies?t.movies.findIndex((function(t){return t.imdbID===e.payload.imdbID})):-1;return-1!==n&&(t.movies[n].Plot=e.payload.Plot),Object(Lt.a)({},t);case H.RETRIEVE_MOVIE_GENRES:var i=t.movies?t.movies.findIndex((function(t){return t.imdbID===e.payload.imdbID})):-1;return-1!==i&&(t.movies[i].Genre=e.payload.Genre.split(", ")),Object(Lt.a)({},t);case H.ADD_NOMINATION_SUCCESS:case H.REMOVE_NOMINATION_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},t),{},{nominations:e.payload});case H.SUBMIT_NOMINATION_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},t),{},{submitted:!0});case H.CLEAR_SEARCH_SUCCESS:return Object(Lt.a)(Object(Lt.a)({},t),{},{movies:null,totalResults:0,currentSearchPage:1});default:return t}},zt=Object(Yt.b)({movie:Bt}),Wt=n(107),Jt=n(76),Kt=n(108),Xt=n.n(Kt),Zt=(Vt={key:"persistedStore"},qt=zt,Object(Jt.a)(Object(Lt.a)(Object(Lt.a)({},Vt),{},{storage:Xt.a}),qt)),$t=[Wt.a],te=Object(Yt.c)(Zt,Yt.a.apply(void 0,$t)),ee=Object(Jt.b)(te),ne=te,ie=n(109),ae=n(110),oe=Object(ae.a)({palette:{primary:{main:"#43535e"},secondary:{main:"rgb(193, 215, 222)"}}});s.a.render(Object(p.jsx)(r.a,{store:ne,children:Object(p.jsx)(ie.a,{loading:null,persistor:ee,children:Object(p.jsx)(Qt.a,{theme:oe,children:Object(p.jsx)(Gt,{})})})}),document.getElementById("root")),Ht()}},[[166,1,2]]]);
//# sourceMappingURL=main.151a53d2.chunk.js.map