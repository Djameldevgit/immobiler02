import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import { useTranslation } from 'react-i18next'

const Categories = () => {
    const dispatch = useDispatch();
    const { languageReducer } = useSelector(state => state);
    const { t } = useTranslation();

    return (
        <div className="cardcategory">
            <div className='formcategory'>
                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.VENTE, payload: 'true' })}
                >
                    <i className="fas fa-house-user me-2 text-success"></i>
                    {t('vente')}
                </div>

                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.LOCATION, payload: 'true' })}
                >
                    <i className="fas fa-building me-2 text-success"></i>
                    {t('location')}
                </div>

                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.LOCATIONVACANCES, payload: 'true' })}
                >
                    <i className="fas fa-umbrella-beach me-2 text-success"></i>
                    {t('location_vacances')}
                </div>

                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.ECHANGE, payload: 'true' })}
                >
                    <i className="fas fa-sync-alt me-2 text-success"></i>
                    {t('echange')}
                </div>

                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.CHERCHELOCATION, payload: 'true' })}
                >
                    <i className="fas fa-search-location me-2 text-success"></i>
                    {t('cherche_location')}
                </div>

                <div
                    className="text"
                    onClick={() => dispatch({ type: GLOBALTYPES.CHERCHEACHAT, payload: 'true' })}
                >
                    <i className="fas fa-search me-2 text-success"></i>
                    {t('cherche_achat')}
                </div>
            </div>
        </div>
    )
}

export default Categories
