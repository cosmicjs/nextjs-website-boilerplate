
import { assign } from 'lodash';

export const mapGlobals = (globals) => {
    var response = {};
    globals.map((global) => {
      switch(global.slug){
        case 'contact-form':
          response.contact_form = global;
          break;
        case 'header':
          response.header = global;
          break;
        case 'nav':
          response.nav = global;
          break;
        case 'social':
          response.social = global;
          break;
        case 'contact-info':
          response.contact_info = global;
          break;
        case 'footer':
          response.footer = global;
          break;
      }
    })
    return response;
};

export const mapHome = (data) => {
  const home = {};
  data.metafields.map((obj) => {
    if(obj.key == 'carousel' || obj.key == 'blurbs'){
      home[obj.key] = obj.children
    }
    else
      home[obj.key] = obj;
  });
  return home;
}

export const mapFaqs = (data) => {
  const faqs = {};
  faqs.title = 'FAQs'
  data.metafields.map((obj) => {
    faqs[obj.key] = obj.children
  });
  return faqs;
}