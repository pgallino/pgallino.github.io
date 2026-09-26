import { useLanguage } from './LanguageContext'
import strings from './strings'

export function useTranslation() {
  const { language, toggleLanguage } = useLanguage()
  return { t: strings[language], language, toggleLanguage }
}
