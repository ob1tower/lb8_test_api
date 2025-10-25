import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,  
  duration: '10s',
};

export default function () {
  const res = http.get('http://127.0.0.1:8080/compute?n=2000');
  
  check(res, {
    'статус 200': (r) => r.status === 200,
    'время ответа < 500мс': (r) => r.timings.duration < 500,
  });

  sleep(0.3);
}
