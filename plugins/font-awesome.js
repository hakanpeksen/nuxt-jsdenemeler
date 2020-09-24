import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEye,
  faEyeSlash,
  faBookmark,
  faImage,
  faIdCard,
  faMap,
} from '@fortawesome/free-regular-svg-icons'

library.add({
  faEye,
  faEyeSlash,
  faBookmark,
  faImage,
  faIdCard,
  faMap,
})
Vue.component('font-awesome-icon', FontAwesomeIcon)
