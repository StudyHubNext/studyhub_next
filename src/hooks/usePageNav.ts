import { PATHS } from '@/constants';
import { useRouter, useParams } from 'next/navigation';

export const usePageNav = () => {
  const router = useRouter();
  const params = useParams();

  const handleGoBack = () => {
    router.back();
  };

  const navigateToHome = () => router.push(PATHS.HOME);
  const navigateToLogin = () => router.push(PATHS.LOGIN);
  const navigateToSignup = () => router.push(PATHS.SIGNUP);
  const navigateToMyPage = () => router.push(PATHS.MYPAGE);
  const navigateToLecture = () => router.push(PATHS.LECTURES);

  const navigateToGroupList = () => router.push(PATHS.GROUPS.LIST);
  const navigateToGroupCreate = () => router.push(PATHS.GROUPS.CREATE);

  const navigateToGroupDetail = (groupId?: string | number) => {
    const id = groupId ?? params.groupId;
    if (id) {
      router.push(PATHS.GROUPS.DETAIL(id as string));
    }
  };

  const navigateToGroupEdit = (groupId?: string | number) => {
    const id = groupId ?? params.groupId;
    if (id) {
      router.push(PATHS.GROUPS.EDIT(id as string));
    }
  };

  const navigateToRecordCreate = (groupId?: string | number) => {
    const id = groupId ?? params.groupId;
    if (id) {
      router.push(PATHS.GROUPS.RECORDS.CREATE(id as string));
    }
  };

  const navigateToRecordDetail = (groupId?: string | number, recordId?: string | number) => {
    const gId = groupId ?? params.groupId;
    const rId = recordId ?? params.recordId;
    if (gId && rId) {
      router.push(PATHS.GROUPS.RECORDS.DETAIL(gId as string, rId as string));
    }
  };

  const navigateToRecordEdit = (groupId?: string | number, recordId?: string | number) => {
    const gId = groupId ?? params.groupId;
    const rId = recordId ?? params.recordId;
    if (gId && rId) {
      router.push(PATHS.GROUPS.RECORDS.EDIT(gId as string, rId as string));
    }
  };

  return {
    handleGoBack,
    navigateToHome,
    navigateToLogin,
    navigateToSignup,
    navigateToMyPage,
    navigateToLecture,
    navigateToGroupList,
    navigateToGroupCreate,
    navigateToGroupDetail,
    navigateToGroupEdit,
    navigateToRecordCreate,
    navigateToRecordDetail,
    navigateToRecordEdit,
  };
};
