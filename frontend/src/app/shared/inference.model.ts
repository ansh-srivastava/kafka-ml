export class Inference {
    replicas: number;
    model_result: number;
    input_format: string;
    input_config: string;
    input_topic: string;
    output_topic: string;
    token: string;
    external_host: string;
    kafka_broker: string;
    limit: number;
    output_upper: string;
}