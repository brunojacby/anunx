import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"


const CheckAuth = ({ Component, pageProps }) => {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const router = useRouter()

    useEffect(() => {
        if (loading) return

        if (!session) {
         router.push('/auth/signin')
        }
    }, [session, loading])

    if (session) {
        return <Component {...pageProps} />
    } 

    return 'Carregando...'  

}

export default CheckAuth