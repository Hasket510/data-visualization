import { IData } from '../../App'
import styles from './DataDisplay.module.scss'

export function DataDisplay({ dev, test, prod, norm }: IData) {
	const maxHeight = 150
	const maxValue = Math.max(
		dev.front,
		dev.back,
		dev.db,
		test.front,
		test.back,
		test.db,
		prod.front,
		prod.back,
		prod.db
	)

	const scale = maxHeight / maxValue

	const different = (
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
		f: number
	) => {
		const sum = d + e + f - (a + b + c)

		if (sum > 0) {
			return (
				<div className={`${styles.different} ${styles.plus}`}>{`+${sum}`}</div>
			)
		}
		if (sum < 0) {
			return <div className={`${styles.different} ${styles.minus}`}>{sum}</div>
		}
		if (sum === 0) {
			return <div className={styles.different}>{sum}</div>
		}

		return sum
	}

	return (
		<div className={styles.container}>
			<div className={styles.column}>
				<div
					className={`${styles.bar} ${styles.front}`}
					style={{ height: `${dev.front * scale}px` }}
				>
					{dev.front}
				</div>
				<div
					className={`${styles.bar} ${styles.back}`}
					style={{ height: `${dev.back * scale}px` }}
				>
					{dev.back}
				</div>
				<div
					className={`${styles.bar} ${styles.db}`}
					style={{ height: `${dev.db * scale}px` }}
				>
					{dev.db}
				</div>
				<span className={styles.columnLabel}>dev</span>
			</div>
			{different(dev.front, dev.back, dev.db, test.front, test.back, test.db)}
			<div className={styles.column}>
				<div
					className={`${styles.bar} ${styles.front}`}
					style={{ height: `${test.front * scale}px` }}
				>
					{test.front}
				</div>
				<div
					className={`${styles.bar} ${styles.back}`}
					style={{ height: `${test.back * scale}px` }}
				>
					{test.back}
				</div>
				<div
					className={`${styles.bar} ${styles.db}`}
					style={{ height: `${test.db * scale}px` }}
				>
					{test.db}
				</div>
				<span className={styles.columnLabel}>test</span>
			</div>
			{different(
				test.front,
				test.back,
				test.db,
				prod.front,
				prod.back,
				prod.db
			)}
			<div className={styles.column}>
				<div
					className={`${styles.bar} ${styles.front}`}
					style={{ height: `${prod.front * scale}px` }}
				>
					{prod.front}
				</div>
				<div
					className={`${styles.bar} ${styles.back}`}
					style={{ height: `${prod.back * scale}px` }}
				>
					{prod.back}
				</div>
				<div
					className={`${styles.bar} ${styles.db}`}
					style={{ height: `${prod.db * scale}px` }}
				>
					{prod.db}
				</div>
				<span className={styles.columnLabel}>prod</span>
			</div>
			<div className={styles.column}>
				<div
					className={`${styles.bar} ${styles.norm}`}
					style={{ height: `${norm * scale}px` }}
				>
					<span className={styles.normValue}>{norm}</span>
				</div>
				<span className={styles.columnLabel}>Норматив</span>
			</div>
		</div>
	)
}
