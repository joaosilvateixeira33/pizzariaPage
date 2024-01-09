import styles from "./dashboard.module.scss"

export const Dashboard = () =>{
    return(
        <section className={styles.sectionDashboard}>
            <div className={styles.container}>
                <header className={styles.headerDashboard}>
                    <h1>logo</h1>
                    <button>
                        Voltar ao menu
                    </button>
                </header>
                <div className={styles.internalContent}>
                    <div className={styles.containerEntrega}>
                        <div className={styles.contentEntrega}>
                            <i class="bi bi-truck"></i><h2>0</h2>
                        </div>
                        <h5>Entrega em andamento</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}