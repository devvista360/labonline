import { ExamLine } from './examLine';
export class ExamOrder {
	public isSelected = false;
    public examDate: string;
    public examId: string;
    public patientName: string;
    public patientId: string;
    public processed: string;
    public lineItems: ExamLine[];
}