import { PriceByCurrency } from "./price-by-currency";

export class ServiceInfo{
     name: string;
     category: string;
     description: string;
     prices_by_currency: PriceByCurrency[];
     expected_duration: string;
     test_result_sample: string;
     long_description?: string;
     image?: string;
     dna_collection_process?: string;
}