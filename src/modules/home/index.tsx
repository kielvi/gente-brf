import './home.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../locale/i18next";

import { ROUTE_IDBRF, ROUTE_ACCESS } from "../../routes/";

export default function Home() {
	const { t } = useTranslation();

	return (

		<div className="home">
			<div className="home_choices -register">
				<div className="home_choices-content">
					<div className="home_choices-icon -register"></div>
					<div className="home_choices-label -title">{t('home.choices.register.title')}</div>
					{/* <div className="home_choices-label -description">
						<div dangerouslySetInnerHTML={{ __html: t('home.choices.register.description',) }} />
					</div>
					<div className="home_choices-label -obs" dangerouslySetInnerHTML={{ __html: t('home.choices.register.obs',) }} /> */}
					<Link to={ROUTE_IDBRF} className="link -yellow">{t('home.choices.register.link')}</Link>
				</div>
			</div>

			<div className="home_choices -login">
				<div className="home_choices-content">
					<div className="home_choices-icon -login"></div>
					<div className="home_choices-label -title">{t('home.choices.login.title')}</div>
					{/* <div className="home_choices-label -description"><div dangerouslySetInnerHTML={{ __html: t('home.choices.login.description',) }} /></div> */}
					<Link
						to={{ pathname: ROUTE_ACCESS }}
						target="_parent"
						className="link -blue">
						{t('home.choices.login.link')}
					</Link>
					<div className="home_choices-label -description"><div dangerouslySetInnerHTML={{ __html: t('home.choices.login.description',) }} /></div>
				</div>
			</div>
		</div>

	)
}
