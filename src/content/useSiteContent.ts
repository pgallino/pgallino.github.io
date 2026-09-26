import { useLanguage } from '../i18n/LanguageContext'
import { content } from './site'

export function useSiteContent() {
  const { language } = useLanguage()
  return content[language]
}
