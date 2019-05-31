
//REGISTRO DE COMPONENTES
//**************************************************************************************************************************************************** */
Vue.component('navegacion' , {
	//MENÚ DE NAVEGACIÓN page
	template: `
		<div>
			<nav class="orange lighten-4 navigate" role="navigation" id="navigation">
				<div class="nav-wrapper container">
				<a id="logo-container" href="#" class="brand-logo"><img class="responsive-img" width="60" src="assets/img/logo3.jpg" alt=""></a>
				<ul class="right hide-on-med-and-down">
					<li><a href="#index-banner"><i class="fas fa-home"></i> Home</a></li>
					<li><a href="#servicios"><i class="fas fa-cut"></i> Servicios</a></li>
					<li><a href="#contacto"><i class="fas fa-bomb"></i> Contáctanos</a></li>
					<li><a href="#equipo"><i class="fas fa-users"></i> Equipo</a></li>
				</ul>

				<ul id="nav-mobile" class="sidenav orange lighten-4 navigate">
					<li><a href="#index-banner"><i class="fas fa-home"></i>Home</a></li>
					<li><a href="#servicios"><i class="fas fa-cut"></i>Servicios</a></li>
					<li><a href="#contacto"><i class="fas fa-bomb"></i>Contáctanos</a></li>
					<li><a href="#equipo"><i class="fas fa-users"></i>Equipo</a></li>
				</ul>
				<a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="fas fa-bars"></i></a> 
				</div>
			</nav>
		</div>		
	`

}),
Vue.component('indexbanner',{
	//BANER
	props :{
		img : {
			type:String
		}
		
	},
	template: `
	<div>
		<div id="index-banner" class="parallax-container">
			<div class="section no-pad-bot">
				<div class="container">
					<br><br>
					<h1 class="header center">Nombre</h1>
				</div>
			</div>
			<div class="parallax"><img :src="img" alt="Unsplashed background img 1"></div>
			
		</div>
		<br>
	</div>
	`
}),

Vue.component('descrip', {
	template : 
	`<div class="container">
		<div class="section">
		<h3 class="center">Descripcción</h3>
		<div class="row">
			<div class="col s12 m12 l8 slider" >
			<div class="slider">
				<ul class="slides">
				<li>
					<img src="assets/img/b1.jpg"> <!-- random image -->
					<div class="caption center-align">
					<h3>This is our big Tagline!</h3>
					<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
					</div>
				</li>
				<li>
					<img src="assets/img/b1.jpg"> <!-- random image -->
					<div class="caption left-align">
					<h3>Left Aligned Caption</h3>
					<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
					</div>
				</li>
				<li>
					<img src="assets/img/b1.jpg"> <!-- random image -->
					<div class="caption right-align">
					<h3>Right Aligned Caption</h3>
					<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
					</div>
				</li>
				<li>
					<img src="assets/img/b1.jpg"> <!-- random image -->
					<div class="caption center-align">
					<h3>This is our big Tagline!</h3>
					<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
					</div>
				</li>
				</ul>
			</div>
			</div>
			<div class="col s12 m12 l4 descri">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam dignissimos earum, suscipit consequatur, itaque, ipsa sunt dolores vitae fuga deserunt incidunt sit soluta laborum nobis. Vero consectetur praesentium saepe laborum?</p>
			</div>
		</div>
		</div>
  	</div> `

}),

Vue.component('services',{
	template : 
		`
		<div class="container" id="servicios">
			<div class="section">
			<!--   Icon Section   -->
			<div class="row">
				<div class="col s12 m4">
				<div class="icon-block">
					<h2 class="center black-text"><i class="fas fa-cut"></i></h2>
					<h5 class="center">Service 1</h5>

					<p class="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias blanditiis et deserunt, odio, voluptas accusantium nesciunt qui aut ab cum autem ullam, non eum, distinctio illum aliquid. Voluptates, sunt?</p>
				</div>
				</div>
				<div class="col s12 m4">
				<div class="icon-block">
					<h2 class="center black-text"><i class="fas fa-paint-brush"></i></h2>
					<h5 class="center">Service 2</h5>

					<p class="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi maiores mollitia quam optio earum minima ipsum, voluptas nesciunt nihil quibusdam nostrum praesentium iusto quisquam harum placeat accusantium, officiis cupiditate eius!</p>
				</div>
				</div>

				<div class="col s12 m4">
				<div class="icon-block">
					<h2 class="center black-text"><i class="fas fa-coffee"></i></h2>
					<h5 class="center">Service 3</h5>
					<p class="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quidem, aliquam quisquam vitae eveniet explicabo vero recusandae iste aliquid est quo accusamus necessitatibus optio eaque ipsa harum laudantium nihil iure.</p>
				</div>
				</div>
			</div>
			</div>
		</div>		
		`

}),
Vue.component('piepagina',{
	template: 
	`
	<footer class="page-footer orange lighten-4">
		<div class="container">
		<div class="row">
			<div class="col l6 s12">
			<h5 class="black-text">La barberia <i class="fas fa-anchor"></i></h5>
			<p class="black-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ex dolor, hic, sunt officiis atque ullam natus tempore excepturi molestiae doloribus nihil autem ducimus laboriosam et earum placeat error illum?</p>
			</div>
		</div>
		</div>
		<div class="footer-copyright">
		<div class="container">
			<a class="black-text" href="">Steven Sterling Valencia 2018</a>
		</div>
		</div>
	</footer>
	`
}),

Vue.component('uppage',{
	template: 
	`
		<div><span @click = "uppages" class="ir-arriba"><i class="fas fa-angle-double-up"></i></span></div>
	`,
	methods : {
		uppages : function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 800);
			$(window).scroll(function(){
				if( $(this).scrollTop() > 100 ){
					$('.ir-arriba').slideDown(300);
					// $("#contacto").slideDown(600);
				} else {
					$('.ir-arriba').slideUp(300);
					// $("#contacto").slideUp(600);
		
				}
			});
		}
	}
})

//**************************************************************************************************************************************************** */

//INSTANCIA DE vue 
var app = new Vue({
	el : "#app",
	//CICLO DE VIDA DE UN COMPONENTE 
	//MOUNTED : SE EJECUTA CUANDO SE CREA EL COMPONENTE EN EL DOM
	mounted : function(){
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.slider').slider();	
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
				&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				// $target = $target.length && $target || $('[ name = ' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 2000);
					return false;
					$("#nav-mobile").hide();
				}
			}
		});
		
	}
	
})