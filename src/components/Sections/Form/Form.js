import styles from './Form.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'

export default function Form() {
    return (
        <section className={styles.formSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Card className={styles.formCard}>
                        <form className={styles.form}>
                            <h3>Reserve Your Time</h3>
                            <p>Select your preferred date and time</p>
                            <div className={styles.field}>
                                <input placeholder='Name'/>
                                <input placeholder='Last Name' />
                            </div>
                            <div className={styles.field}>
                                <input placeholder='+2784 391 7..' />
                                <label>Select Style <select></select></label>
                            </div>
                            <div className={styles.field}>
                                <input type='date'/>
                                <input type='time'/>
                            </div>
                            <Button>SUBMIT</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )

}