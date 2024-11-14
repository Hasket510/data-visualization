import styles from './Description.module.scss'

const list = ['Клиентская часть', 'Серверная часть', 'База данных']
export function Description() {
	const color = (item: string) => {
		switch (item) {
			case 'Клиентская часть':
				return 'front'
			case 'Серверная часть':
				return 'back'
			case 'База данных':
				return 'db'
		}
		return ''
	}
	return (
		<ul className={styles.description}>
			{list.map(item => (
				<li key={item} className={styles.descriptionItem}>
					<span className={`${styles.descriptionText} ${styles[color(item)]}`}>
						{item}
					</span>
				</li>
			))}
		</ul>
	)
}
