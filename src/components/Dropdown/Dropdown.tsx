import { useState } from 'react'
import styles from './Dropdown.module.scss'

const list = ['OS Doors', 'OS Bombuntu', 'Mibre Office', 'LoWtEx', 'W$ POS']
interface IDropdownProps {
	onSelect: (index: number) => void
}

export function Dropdown({ onSelect }: IDropdownProps) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleItemClick = (index: number) => {
		onSelect(index + 1)
		setIsOpen(false)
	}

	return (
		<button className={styles.btn} onClick={toggleDropdown}>
			<span className={styles.icon}></span>
			<span className={styles.icon}></span>
			<span className={styles.icon}></span>
			{isOpen && (
				<ul className={styles.dropdown}>
					{list.map((item, index) => (
						<li
							key={item}
							className={styles.dropdownItem}
							onClick={() => handleItemClick(index)}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</button>
	)
}
