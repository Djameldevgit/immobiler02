import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import * as languageActions from '../redux/actions/languageAction';

function LanguageSelector() {
  const dispatch = useDispatch();
  const { auth, languageReducer } = useSelector(state => state);
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(['language']);

  const handleLanguageChange = useCallback((language, e) => {
    if (e) e.stopPropagation(); // Evita que el evento siga propagándose

    switch (language) {
      case 'en':
        dispatch(languageActions.inglishLanguage(language, auth));
        setCookie('language', 'en', { path: '/' });
        break;
      case 'fr':
        dispatch(languageActions.franchLanguage(language, auth));
        setCookie('language', 'fr', { path: '/' });
        break;
      case 'ar':
        dispatch(languageActions.arabLanguage(language, auth));
        setCookie('language', 'ar', { path: '/' });
        break;
      case 'es':
        // handle 'es' case
        break;
      default:
        dispatch(languageActions.synchronizeLanguage(language, auth));
        setCookie('language', 'default', { path: '/' });
        break;
    }
  }, [auth, dispatch, setCookie]);

  useEffect(() => {
    const defaultLanguage = cookies.language || 'fr';
    handleLanguageChange(defaultLanguage);
  }, [cookies.language, handleLanguageChange]);

  return (
    <div className='language-component'>
      <div
        className="dropdown-item"
        onClick={(e) => handleLanguageChange('ar', e)}
      >
        {t('Arabe', { lng: languageReducer.language })}
      </div>
      <div
        className="dropdown-item"
        onClick={(e) => handleLanguageChange('fr', e)}
      >
        {t('frances', { lng: languageReducer.language })}
      </div>
      <div
        className="dropdown-item"
        onClick={(e) => handleLanguageChange('en', e)}
      >
        {t('ingles', { lng: languageReducer.language })}
      </div>
    </div>
  );
}

export default LanguageSelector;


