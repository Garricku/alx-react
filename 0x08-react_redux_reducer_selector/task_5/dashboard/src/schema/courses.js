import { schema } from 'normalizr';

const courseSchema = new schema.Entity('courses', {}, { idAttribute: 'id' });

export default courseSchema;