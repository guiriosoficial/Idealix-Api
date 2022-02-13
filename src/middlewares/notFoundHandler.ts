import Err from '@shared/err';

export default function norFound() {
    throw new Err('Not Found', 404)
}
