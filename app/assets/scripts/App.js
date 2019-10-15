import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader = new StickyHeader();
var modal = new Modal ();
