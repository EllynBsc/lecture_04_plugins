// ENTRY FILE where I import all of my functions and i invoke all of them.


// IMPORTS (equivalent of require_relative in ruby!)
// SYNTAX: import { nameFunction} from 'path_to_the_file'
import { submitCallback } from './movie.js';
import { initSortable } from './plugins/init_sortable.js';
import { initMarkdown } from './plugins/init_markdown.js';
import { initSelect2 } from './plugins/init_select2.js'


//INVOKING MY CALLBACK FUNCTIONS
const form = document.querySelector('#search-form');
form.addEventListener('submit', submitCallback )


// INVOKE MY PLUGINS FUNCTIONS
  // want to invoke/call my sortable package
  initSortable();
  // want to call my initMarkdown
  initMarkdown();
  // want to call the select2
  initSelect2();
