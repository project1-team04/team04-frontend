import axios from 'axios';

/**
 * Axios 인스턴스 설정
 *
 * - baseURL을 "/api/"로 설정하여, Nginx 리버스 프록시를 통해 백엔드와 통합합니다.
 * - 이렇게 설정하면 프론트엔드가 실행되는 도메인과 동일한 도메인에서 API 요청이 이루어집니다.
 * - 실제 요청은 Nginx가 백엔드(`http://<제공받은IP>:8080/`)로 프록시합니다.
 */

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default instance;
