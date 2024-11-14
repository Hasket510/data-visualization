import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { DataDisplay } from './components/DataDisplay/DataDisplay'
import { Description } from './components/Description/Description'
import { Dropdown } from './components/Dropdown/Dropdown'

export interface IData {
	title?: string
	dev: Tdata
	test: Tdata
	prod: Tdata
	norm: number
}

export type Tdata = {
	front: number
	back: number
	db: number
}
function App() {
	const [data, setData] = useState<IData>({
		title: '',
		dev: { front: 0, back: 0, db: 0 },
		test: { front: 0, back: 0, db: 0 },
		prod: { front: 0, back: 0, db: 0 },
		norm: 0,
	})

	const [fetchingIndex, setFetchingIndex] = useState(1)

	useEffect(() => {
		fetch(`https://rcslabs.ru/ttrp${fetchingIndex}.json`)
			.then(response => response.json())
			.then(result => setData(result))
			.catch(error => console.error('Error:', error))
	}, [fetchingIndex])
	return (
		<main className={styles.main}>
			<div className={styles.topContainer}>
				<h1
					className={styles.title}
				>{`Количество пройденных тестов "${data.title}"`}</h1>
				<Dropdown
					onSelect={(selectedIndex: number) => setFetchingIndex(selectedIndex)}
				/>
			</div>
			<DataDisplay
				dev={data.dev}
				test={data.test}
				prod={data.prod}
				norm={data.norm}
			/>
			<Description />
		</main>
	)
}

export default App
