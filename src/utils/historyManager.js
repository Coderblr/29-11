export const addToHistory = (type, details) => {
    try {
        const history = JSON.parse(localStorage.getItem('sbi_gen_history') || '[]');
        const newRecord = {
            id: Date.now(),
            type,
            details,
            timestamp: new Date().toISOString(),
        };
        const updatedHistory = [newRecord, ...history].slice(0, 50); // Keep last 50 records
        localStorage.setItem('sbi_gen_history', JSON.stringify(updatedHistory));

        // Update stats
        const stats = JSON.parse(localStorage.getItem('sbi_gen_stats') || '{"cifCount": 0, "accountCount": 0}');
        if (type === 'CIF') {
            stats.cifCount += (details.count || 1);
        } else {
            stats.accountCount += (details.count || 1);
        }
        localStorage.setItem('sbi_gen_stats', JSON.stringify(stats));

        return true;
    } catch (error) {
        console.error('Failed to save history:', error);
        return false;
    }
};

export const getHistory = () => {
    try {
        return JSON.parse(localStorage.getItem('sbi_gen_history') || '[]');
    } catch (error) {
        return [];
    }
};

export const getStats = () => {
    try {
        return JSON.parse(localStorage.getItem('sbi_gen_stats') || '{"cifCount": 0, "accountCount": 0}');
    } catch (error) {
        return { cifCount: 0, accountCount: 0 };
    }
};
