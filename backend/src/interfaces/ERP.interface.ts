export interface Employee {
	GivenName: string;
	SSN?: string;
	PrimaryAddr: {
		CountrySubDivisionCode: string;
		City: string;
		PostalCode: string;
		Id?: string;
		Line1: string;
	};
	PrimaryPhone: {
		FreeFormNumber: string;
	};
	FamilyName: string;
}

export interface Customer {
	FullyQualifiedName: string;
	PrimaryEmailAddr: {
		Address: string;
	};
	DisplayName: string;
	Suffix: string;
	Title: string;
	MiddleName: string;
	Notes: string;
	FamilyName: string;
	PrimaryPhone: {
		FreeFormNumber: string;
	};
	CompanyName: string;
	BillAddr: {
		CountrySubDivisionCode: string;
		City: string;
		PostalCode: string;
		Line1: string;
		Country: string;
	};
	GivenName: string;
}

export interface Bill {
	Line: [
		{
			DetailType: string;
			Amount: number;
			Id?: string;
			AccountBasedExpenseLineDetail: {
				AccountRef: {
					value: string;
				};
			};
		}
	];
	VendorRef: {
		value: string;
	};
}

export interface BillPayment {
	PrivateNote: string;
	VendorRef: {
		name: string;
		value: string;
	};
	TotalAmt: number;
	PayType: string;
	Line: [
		{
			Amount: number;
			LinkedTxn: [
				{
					TxnId: string;
					TxnType: string;
				}
			];
		}
	];
	CheckPayment: {
		BankAccountRef: {
			name: string;
			value: string;
		};
	};
}

export interface Invoice {
	Line: [
		{
			DetailType: string;
			Amount: number;
			SalesItemLineDetail: {
				ItemRef: {
					name: string;
					value: string;
				};
			};
		}
	];
	CustomerRef: {
		value: string;
	};
}

export interface Payment {
	TotalAmt: number;
	CustomerRef: {
		value: string;
	};
}

export interface Item {
	TrackQtyOnHand: boolean;
	Name: string;
	QtyOnHand: number;
	IncomeAccountRef: {
		name: string;
		value: string;
	};
	AssetAccountRef: {
		name: string;
		value: string;
	};
	InvStartDate: Date;
	Type: string;
	ExpenseAccountRef: {
		name: string;
		value: string;
	};
}

export interface PurchaseOrder {
	TotalAmt: number;
	Line: [
		{
			DetailType: string;
			Amount: number;
			Id: string;
			ItemBasedExpenseLineDetail: {
				ItemRef: {
					name: string;
					value: string;
				};
				CustomerRef?: {
					name: string;
					value: string;
				};
				Qty: number;
				TaxCodeRef: {
					value: string;
				};
				BillableStatus: string;
				UnitPrice: number;
			};
		}
	];
	APAccountRef: {
		name: string;
		value: string;
	};
	VendorRef: {
		name: string;
		value: string;
	};
	ShipTo: {
		name: string;
		value: string;
	};
}
