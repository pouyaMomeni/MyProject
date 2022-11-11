import { summaryReq } from "pages/api/_index"
import { useQuery } from "react-query"
const useSummary = () => {
    return useQuery("summary", summaryReq)
}

export {
    useSummary,
}