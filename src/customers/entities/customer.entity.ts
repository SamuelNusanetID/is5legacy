import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Customer', synchronize: false })
export class Customer extends BaseEntity {
  @PrimaryColumn()
  CustId: string;

  @Column()
  BranchId: string;

  @Column()
  DisplayBranchId: string;

  @Column()
  FormId: string;

  @Column()
  CustName: string;

  @Column()
  CustGender: string;

  @Column()
  custPOB: string;

  @Column({ type: 'date' })
  custDOB: string;

  @Column()
  CustIdType: string;

  @Column()
  CustIdNumber: string;

  @Column()
  CustCompany: string;

  @Column()
  CustBusName: string;

  @Column()
  BusId: string;

  @Column()
  CustResAdd1: string;

  @Column()
  CustResAdd2: string;

  @Column()
  CustResCity: string;

  @Column()
  CustResPhone: string;

  @Column()
  CustOfficeAdd1: string;

  @Column()
  CustOfficeAdd2: string;

  @Column()
  CustOfficeCity: string;

  @Column()
  CustOfficePhone: string;

  @Column()
  CustBillingAdd: boolean;

  @Column()
  CustHP: string;

  @Column()
  CustEmail: string;

  @Column()
  CustTechCP: string;

  @Column()
  CustTechCPPhone: string;

  @Column()
  CustTechCPEmail: string;

  @Column()
  CustBillCP: string;

  @Column()
  CustBillMethodLetter: boolean;

  @Column()
  CustBillMethodEmail: boolean;

  @Column()
  CustBillCPPhone: string;

  @Column()
  CustBillCPEmail: string;

  @Column()
  CustRegDate: Date;

  @Column()
  CustNotes: string;

  @Column()
  EmpApproval: string;

  @Column()
  CustStatus: string;

  @Column()
  SalesId: string;

  @Column()
  InsertDateTime: Date;

  @Column()
  UpdateDateTime: Date;

  @Column()
  TaxType: boolean;

  @Column()
  CetakDuluan: boolean;

  @Column()
  ManagerSalesId: string;
}
