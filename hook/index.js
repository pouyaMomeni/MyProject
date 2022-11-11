import { summaryReq, fullReq } from "pages/api/_index"
import { useQuery } from "react-query"
const useSummary = () => {
    return useQuery("summary", summaryReq)
}
const useFull = () => {
    return useQuery("full", fullReq)
}

export {
    useSummary,
    useFull
}