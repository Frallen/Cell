import { configure } from 'vee-validate';
import { localize,setLocale } from '@vee-validate/i18n';

import ru from '@vee-validate/i18n/dist/locale/ru.json';

configure({
  generateMessage: localize({
    ru
  }),
});
setLocale('ru');