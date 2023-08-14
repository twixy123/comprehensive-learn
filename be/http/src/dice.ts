import { trace, Span, SpanStatusCode } from '@opentelemetry/api';

export const tracer = trace.getTracer("dice-file")

function rollOnce(i: number, min: number, max: number) {
  return tracer.startActiveSpan(`rollOnce:${i}`, (span: Span) => {
    const result = Math.floor(Math.random() * (max - min) + min);
    span.setAttribute('dicelib.rolled', result.toString());
    span.end();
    return result;
  })
}

export function rollTheDice(rolls: number, min: number, max: number) {
  return tracer.startActiveSpan(
    'rollTheDice',
    {
      attributes: {
        attr1: "rollTheDice_rollTheDice_rollTheDice"
      }
    },
    (parentSpan: Span) => {
      const result: number[] = [];
      try {
        for (let i = 0; i < rolls; i++) {
          result.push(rollOnce(i, min, max));
        }
      } catch (ex) {
        parentSpan.recordException(ex as Error)
        parentSpan.setStatus({
          message: "Some error text",
          code: SpanStatusCode.ERROR
        })
      } finally {
        parentSpan.end()
      }
      
      return result;
    })
}
